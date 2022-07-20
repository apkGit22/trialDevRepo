trigger ClosedOpportunityTrigger on Opportunity (after insert, after update)
{
List<task> tasklist =new List<task>();
    for(Opportunity o:trigger.new)
    {
    if(o.StageName=='Closed Won')
    {
     task  tasklist1 = new task();
       tasklist1.subject ='Follow Up Test Task'; 
       tasklist1.WhatId = o.Id;
        tasklist.add(tasklist1);
    }
        
    }
    if ((tasklist.size())>0)
    {
    insert tasklist;
    }
}