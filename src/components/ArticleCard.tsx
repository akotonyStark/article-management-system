import { Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import { Article } from "../pages/Articles";

type PropTypes = {
    article : Article
}

const ArticleCard = ({article} : PropTypes) => {

  return (
    <div key={article.id} className="article">
      <div style={{ fontWeight: 600, marginBottom:10, display: 'flex', alignItems:'center' }}>
    
        <Avatar src={""} bg={"gold"} name={article?.userId}>
          <AvatarBadge width="1.9em" bg={"teal.500"}>
            <Text fontSize={"small"} color={"white"}>
              {article.id}
            </Text>
          </AvatarBadge>
        </Avatar>
       
        <span style={{marginLeft:10}}>{article?.title.split(' ').slice(0,3).join(' ')}</span>
      </div>
      
      <blockquote>{article?.body}</blockquote>
    
      <div style={{marginTop:20, fontSize:14, color:'teal'}}> ~ <i><em>{article?.userId}</em></i></div>
    </div>
  );
};

export default ArticleCard;
