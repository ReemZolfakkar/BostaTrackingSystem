export default function ProgressBarStatus(currentstatus)
{ 
    console.log(currentstatus)
  let style={class:'progress-num',step:['step active','step','step','step']}
   if (currentstatus=='PACKAGE_RECEIVED' || currentstatus=="NOT_YET_SHIPPED" || currentstatus=="IN_TRANSIT" )
   {
        style={class:'PACKAGE_RECEIVED',step:['active','active',' ',' ']}
   }
   else if(currentstatus=="OUT_FOR_DELIVERY"|| currentstatus=="WAITING_FOR_CUSTOMER_ACTION" || currentstatus=="RECEIVED_DELIVERY_LOCATION")
   {
    style={class:'OUT_FOR_DELIVERY',step:['active','active','active',' ']}
 
   }
   else if(currentstatus=="DELIVERED")
   {
      
    style={class:'DELIVERED',step:['step success','step success','step success','step success']}

   }
   else if(currentstatus=="DELIVERED_TO_SENDER"){
    style={class:'DELIVERED_TO_SENDER',step:['wrong','wrong','wrong','step']}
   }
   return style
}