import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1569061070090-ca11f580b440?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1640538212466-fd7e9ac47f8b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    

    return (
        <div className="InfoBox" >
            
      <div className='cardContainer' >

             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
           : info.temp > 15 
           ? HOT_URL
           : COLD_URL
          }
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
          ? <BeachAccessIcon></BeachAccessIcon>
           : info.temp > 15 
           ? <SunnyIcon></SunnyIcon>
           : <AcUnitIcon></AcUnitIcon>
          }

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p>Temprature = {info.temp}&deg;C </p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}</p> 
        <p>Max Temp = {info.tempMax}</p>   
        <i> <p>Weather feels like {info.weather}, feels like {info.feelslike}&deg;C </p></i>   
        </Typography>

      </CardContent>
  
    </Card>
</div>


        </div>
    )
}