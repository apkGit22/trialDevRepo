import { LightningElement, wire, track , api} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';


export default class candicepoc extends LightningElement {
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
	
    @track dealerValue;
    
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
	
	handleSplitLoadClick(event) {  
        this.spliteLoadVisible = event.target.checked;
    }

   

    handleBrandChange(event) {
        this.selectedBrand = event.target.value;
    }
}