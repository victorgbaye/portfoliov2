import Button from '../../UI/Button/Button'
import {projectData} from './ProjectData'
import styles from './Project.module.scss'

const Project = () => {
  return (
    <div>
        {
            projectData.map((data)=>{
                return(
                    <div key={data.title} className={styles.ProjectContainer}>
                        <img src={data.image}/>
                        <div>
                            <h4 className={styles.ProjectTitle}>{data.title}</h4>
                            <p className={styles.ProjectDescription}>{data.Description}</p>
                            <p>{data.role}</p>
                            <div className={styles.ProjectDocumentation}>
                                <Button style={{color: '#0E441D',display:'flex', alignItems:'center', gap:'8px', background: '#A8E88A', border: '1px solid #A8E88A',}}>View product</Button>
                                <Button>View Documentation</Button>
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