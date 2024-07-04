import { Avatar, AvatarBadge, Button, Text } from "@chakra-ui/react";
import { Article } from "../pages/Articles";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

type PropTypes = {
  article: Article,
  onOpen: any,
  onOpenEdit: any,
  setSelectedArticle: any
};

const ArticleCard = ({ article, onOpen, onOpenEdit, setSelectedArticle }: PropTypes) => {
  const handleDelete = () => {
    onOpen();
  };

  const handleUpdate = () => {
    onOpenEdit();
  };

  return (
    <div key={article.id} className="article" onClick={() => setSelectedArticle(article)}>
      <div
        style={{
          fontWeight: 600,
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        
      >
        <div>
          <Avatar src={""} bg={"gold"} name={article?.userId}>
            <AvatarBadge width="1.9em" bg={"teal.500"}>
              <Text fontSize={"small"} color={"white"}>
                {article.id}
              </Text>
            </AvatarBadge>
          </Avatar>

          <span style={{ marginLeft: 10 }}>
            {article?.title.split(" ").slice(0, 3).join(" ")}
          </span>
        </div>

        <div>
          <Button
            title="Edit"
            size={"sm"}
            color={"blue"}
            as={EditIcon}
            onClick={handleUpdate}
          ></Button>{" "}
          <Button
            title="Delete"
            as={DeleteIcon}
            size={"sm"}
            color={"red"}
            onClick={handleDelete}
          ></Button>
        </div>
      </div>

      <blockquote>{article?.body}</blockquote>

      <div style={{ marginTop: 20, fontSize: 14, color: "teal" }}>
        {"~"}
        <i>
          <em>{article?.userId}</em>
        </i>
      </div>
    </div>
  );
};

export default ArticleCard;
