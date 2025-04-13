import styled from './article.module.css'


function Article (props){
    return(
        <div className={styled.articleWrapper}>
          
          <img src={props.article.imgeUrl}/>

          <h3>{props.article.title}</h3>
          <h5>{props.article.price}</h5>
        </div>
    )
}

export default Article