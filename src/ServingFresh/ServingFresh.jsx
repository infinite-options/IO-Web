import Sf_Fb from '../image/SF_Fb/SF_fb.png';
import Before from '../image/before/before.png';
import SFF from '../image/before/SFF.png';
import Air1 from '../image/Marketing/Artboard1.png';
import Air2 from '../image/Marketing/Artboard2.png';
import Insta from '../image/SFFoot/Instagram.png';
import EggPlant from '../image/SFFoot/eggplant.png';
import SFFicon from '../image/SFFoot/SFicon.png';
import Footeer from '../Homepage/Footer';



const ServingFresh =()=>{



    return(
        <>
        <div style={{marginLeft:'10%',marginRight:'10%',height:'3200px'}}>
            <img style={{width:'100%'}}src={Sf_Fb}></img>
            <div style={{float:'left',fontWeight:'bold',fontSize:'200%',width:'100%',color:"#52330D"}}>
                <div style={{width:'33%',float:'left',}}><p style={{float:'left'}}>Client</p></div>
                <div style={{width:'33%',float:'left',}}><p style={{float:'left'}}>Challenge / brief</p></div>
                <div style={{width:'33%',float:'left',}}><p style={{float:'left'}}>Services</p></div>
            </div>
           
            <div style={{float:'left',width:'100%',color:"#707070"}}>
                <div style={{width:'33%',float:'left',fontSize:'150%'}}><p style={{float:'left',textAlign:'left',fontWeight:'bold'}}>Serving Fresh, LLC</p></div>
                <div style={{width:'33%',float:'left',}}><p style={{float:'left',fontSize:'75%',textAlign:'left'}}>YOUR BUSINESS NAME helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Learn about some of our past projects below, and get in touch to see what we can do for you.</p></div>
                <div style={{width:'33%',float:'left',}}><p style={{float:'left',fontSize:'75%',textAlign:'left'}}>App and web Design / Development<br></br> Branding<br></br> Marketing</p></div>
            
            
            </div>
            <div style={{float:'left',width:'100%',color:"#52330D"}}>
                <div style={{width:'25%',float:'left',fontSize:'100%'}}><p style={{float:'left',textAlign:'left',fontWeight:'bold'}}>Before</p></div>
                <div style={{width:'70%',float:'left',}}><img style={{width:'80%'}}src={Before}></img></div>
            </div>
            <div style={{float:'left',width:'100%',color:"#52330D"}}>
                <div style={{width:'100%',float:'left',fontSize:'100%'}}><p style={{float:'left',textAlign:'left',fontWeight:'bold'}}>After</p></div>
            </div>
            <div style={{float:'left',width:'100%',color:"#52330D"}}>
                <div style={{width:'100%',float:'left',fontSize:'100%'}}><img style={{width:'100%'}}src={SFF}></img></div>
            </div>
            <div style={{float:'left',width:'100%',color:"#52330D"}}>
                <div style={{width:'100%',float:'left',fontSize:'100%'}}><p style={{float:'left',textAlign:'left',fontWeight:'bold'}}>Marketing Content</p></div>
            </div>
            <div style={{float:'left',width:'100%',color:"#52330D"}}>
                <div style={{width:'50%',float:'left'}}><img style={{width:'50%'}} src={Air1}></img></div>
                <div style={{width:'50%',float:'left'}}><img style={{width:'70%'}}src={Air2}></img></div>
            </div>
            <div style={{float:'left',width:'100%',color:"#52330D",marginTop:'75px'}}>
                <div style={{width:'30%',float:'left'}}><img style={{width:'70%'}} src={SFFicon}></img></div>
                <div style={{width:'30%',float:'left'}}><img style={{width:'70%'}}src={EggPlant}></img></div>
                <div style={{width:'30%',float:'left'}}><img style={{width:'70%'}}src={Insta}></img></div>
            </div>
            
        </div>
        
        </>
        
    )

}

export default ServingFresh;