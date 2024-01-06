import Button from '../../UI/Button/Button'
import {projectData} from './ProjectData'
import styles from './Project.module.scss'

const Project = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'40px'}}>
        {
            projectData.map((data)=>{
                return(
                    <div key={data.title} className={styles.ProjectContainer}>
                        <img src={data.image} />
                        <div className={styles.ProjectContent}>
                            <h4 className={styles.ProjectTitle}>{data.title}</h4>
                            <p className={styles.ProjectDescription}>{data.Description}</p>
                            <p>{data.role}</p>
                            <div className={styles.ProjectDocumentation}>
                                <a href='https://thefigplug.onrender.com/'>
                                    <Button style={{color: '#0E441D',display:'flex', alignItems:'center', gap:'8px', background: '#A8E88A', border: '1px solid #A8E88A',}}>View product</Button>
                                </a>
                                <Button>Git Hub</Button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Project