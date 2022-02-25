export default function getDay(timestamp){
    let fulldate=timestamp.split('T');
    let date=fulldate[0];
    let time=fulldate[1];
    let datestamp=date.split('-');
    let year=datestamp[0]
    let month=datestamp[1]
    let day=datestamp[2]
    let newdate=`${day}/${month}/${year}`
    let newtime=time.split('Z')[0];
    return [newdate,newtime]
}