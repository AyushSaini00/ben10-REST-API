import styles from '../styles/Docs.module.css'

const Docs = () => {
    return (
        <div>
            <section className={styles['section-docs']}>
                <div className={styles['section-doc']}>
                    <h2 className={styles.title}>Usage</h2>
                    <p className={styles['request-type']}>Retrive a random alien object »</p>
                    <pre className={styles.pre}>
                        <code>
                            <a href="https://ben10-api.herokuapp.com/random">
                                https://ben10-api.herokuapp.com/random
                            </a>
                        </code>
                    </pre>
                    <p>Example Output:</p>
                    <pre className={styles.pre}>
                        <code>            
{`{
    "general": {
        "name": "...",
        "species": "...",
        "homeWorld": "...",
        "body": "..."
      },
      "abilities": [...],
      "_id": "...",
      "series": "..."
}`}                           
                        </code>
                    </pre>
                    
                    <p className={styles['request-type']}>Retrive all the aliens in a array »</p>
                    <pre className={styles.pre}>
                        <code>
                            <a href="https://ben10-api.herokuapp.com/aliens">
                                https://ben10-api.herokuapp.com/aliens
                            </a>
                        </code>
                    </pre>
                    <p>Example Output:</p>
                    <pre className={styles.pre}>
                        <code>            
{`{
    "count": ...
    "aliens": [{...}, {...}, ...]
}`}                           
                        </code>
                    </pre>

                    <p className={styles['request-type']}>Retrive an alien object using alienID »</p>
                    <pre className={styles.pre}>
                        <code>
                            <a href="https://ben10-api.herokuapp.com/aliens/6078370439565863c09f4486">
                                https://ben10-api.herokuapp.com/aliens/6078370439565863c09f4486
                            </a>
                        </code>
                    </pre>
                    <p>Example Output:</p>
                    <pre className={styles.pre}>
                        <code>            
{`{
    "alien": {
        "general": {
          "name": "...",
          "species": "...",
          "homeWorld": "...",
          "body": "..."
        },
        "abilities": [...],
        "_id": "...",
        "series": "..."
      },
      "request": {
        "type": "...",
        "url": "..."
      }
}`}                           
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    );
}
 
export default Docs;