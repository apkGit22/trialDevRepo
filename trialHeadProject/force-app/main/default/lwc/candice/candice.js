import { LightningElement, wire, track , api} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
//import My_Resource from '@salesforce/resourceUrl/Candice_Image';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import customResource from '@salesforce/resourceUrl/Candice_Resources';



export default class candicepoc extends LightningElement {
    get backgroundStyle() {
        return `background-image:url(${customResource}+ '/candice/images/candice3.jpg')`;
    }
	
	
	renderedCallback() {
        const brhgt = window.innerHeight;
        //document.getElementById('fieldcont').style.height = brhgt - 200;
        console.log("br ht" + brhgt);
        Promise.all([
            loadStyle(this, customResource + '/candice/css/candice.css')
            
        ])
            .then(() => {
                console.log('Files loaded.');
            })
            .catch(error => {
                console.log(error);
            });
    }
	
    // Reactive variables
    @track controllingValues = [];
    @track dependentValues = [];
    @track selectedState;
    @track selectedBrand;
    @track isEmpty = false;
    @track error;
    controlValues;
    totalDependentValues = [];
	
	@track endDateVisible = false; 
	@track deliveryAddressVisible = false; 
	@track addressVisible = true; 
	@track earlyDeliveryVisible = false; 
	@track spliteLoadVisible = false;
	
	@track accountValues = [];
	@track selectedAccount;
	@track projectValues = [];
	@track selectedProject;
	@track mixTypeValues = [];
	@track selectedMixType;
	@track mixValues = [];
	@track selectedMix;
	@track plantValues = [];
    @track selectedPlant;
    @track slump = 50;
	
    @track dealerValue;

    @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
    
    mapMarkers = [{
        location: {
            City: 'San Francisco',
            Country: 'USA',
            PostalCode: '94105',
            State: 'CA',
            Street: 'The Landmark @ One Market, Suite 300'
        },
        value: 'location001',
        title: 'The Landmark Building',
        description: 'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
        icon: 'standard:account'
    }];

    
	
/*	mapMarkers = [
        {
            location: {
                Street: '1000 5th Ave',
                City: 'New York',
                State: 'NY',
            },

            title: 'Metropolitan Museum of Art',
            description:
                'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
        },
        {
            location: {
                Street: '11 W 53rd St',
                City: 'New York',
                State: 'NY',
            },

            title: 'Museum of Modern Art (MoMA)',
            description:
                'Thought-provoking modern and contemporary art.',
        },
        {
            location: {
                Street: '1071 5th Ave',
                City: 'New York',
                State: 'NY',
            },

            title: 'Guggenheim Museum',
            description: 'World-renowned collection of modern and contemporary art.',
        },
    ];

    markersTitle = "Coordinates for Centering";

    center = {
            location: { Latitude: '40.7831856',
                        Longitude: '-73.9675653' }
		};
*/
        

handleSlider(event) {
    this.slump = event.target.value;
}

    handleToggleMultipleOrderClick(event) {  
        this.endDateVisible = event.target.checked;
    } 
	
	handleToggleCustomAddressClick(event) { 
        if(event.target.checked){
			this.deliveryAddressVisible = true;
			this.addressVisible = false;
        }else{
			this.deliveryAddressVisible = false;
			this.addressVisible = true;
        }
    } 
	
	handleToggleEarlyDeliveryClick(event) {  
        this.earlyDeliveryVisible = event.target.checked;
    } 
	
	handleSplitLoadPlusClick(event) {  
        this.spliteLoadVisible = true;
    }

    handleSplitLoadMinusClick(event) {  
        this.spliteLoadVisible = false;
    }

    // Account object info
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    // Picklist values based on record type
    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
    statePicklistValues({error, data}) {
        if(data) {
            this.error = null;

            let stateOptions = [{label:'--None--', value:'--None--'}];

            // Account State Control Field Picklist values
            data.picklistFieldValues.State__c.values.forEach(key => {
                stateOptions.push({
                    label : key.label,
                    value: key.value
                })
            });

            this.controllingValues = stateOptions;

            let brandOptions = [{label:'--None--', value:'--None--'}];

             // Account Brand Control Field Picklist values
            this.controlValues = data.picklistFieldValues.Brand__c.controllerValues;
            // Account Brand dependent Field Picklist values
            this.totalDependentValues = data.picklistFieldValues.Brand__c.values;

            this.totalDependentValues.forEach(key => {
                brandOptions.push({
                    label : key.label,
                    value: key.value
                })
            });

            this.dependentValues = brandOptions;
        }
        else if(error) {
            this.error = JSON.stringify(error);
        }
    }

    handleStateChange(event) {
        // Selected State Value
        this.selectedState = event.target.value;
        this.isEmpty = false;
        let dependValues = [];

        if(this.selectedState) {
            // if Selected State is none returns nothing
            if(this.selectedState === '--None--') {
                this.isEmpty = true;
                dependValues = [{label:'--None--', value:'--None--'}];
                this.selectedState = null;
                this.selectedBrand = null;
                return;
            }

            // filter the total dependent values based on selected State value 
            this.totalDependentValues.forEach(conValues => {
                console.log('conValues : '+JSON.stringify(conValues));
                console.log('conValues.validFor[0] : '+conValues.validFor[0]);
                console.log('this.controlValues : '+JSON.stringify(this.controlValues));
                console.log('this.controlValues[this.selectedState] : '+this.controlValues[this.selectedState]);
               // for(integer 1=0, i< this.controlValues.length,i++){
                    if(conValues.validFor[0] === this.controlValues[this.selectedState]) {
                        dependValues.push({
                            label: conValues.label,
                            value: conValues.value 
                        })
                    }
                    if(conValues.validFor[1] === this.controlValues[this.selectedState]) {
                        dependValues.push({
                            label: conValues.label,
                            value: conValues.value 
                        })
                    }
                    if(conValues.validFor[2] === this.controlValues[this.selectedState]) {
                        dependValues.push({
                            label: conValues.label,
                            value: conValues.value 
                        })
                    }
                    if(conValues.validFor[3] === this.controlValues[this.selectedState]) {
                        dependValues.push({
                            label: conValues.label,
                            value: conValues.value
                        })
                    }
                    if(conValues.validFor[4] === this.controlValues[this.selectedState]) {
                        dependValues.push({
                            label: conValues.label,
                            value: conValues.value
                        })
                    }
               // }
                
            })

            this.dependentValues = dependValues;
        }
    }

    handleBrandChange(event) {
        this.selectedBrand = event.target.value;
    }
    
}