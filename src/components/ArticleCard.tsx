import {
  Avatar,
  Badge,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Article } from "../pages/Articles";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

type PropTypes = {
  article: Article;
  onOpen: any;
  onOpenEdit: any;
  setSelectedArticle: any;
};

const ArticleCard = ({
  article,
  onOpen,
  onOpenEdit,
  setSelectedArticle,
}: PropTypes) => {
  const handleDelete = () => {
    onOpen();
  };

  const handleUpdate = () => {
    onOpenEdit();
  };

  return (
    <div
      key={article.id}
      className="article"
      onClick={() => setSelectedArticle(article)}
    >
      <div
        style={{
          fontWeight: 600,
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Flex>
          <Avatar src={""} bg={"gold"} name={article?.userId}/>

          <Flex direction={'column'} ml={4}>
            <span>{article?.title.split(" ").slice(0, 3).join(" ")}</span>
            <span style={{fontSize:12, fontWeight:300}}>{new Date(article.dateOfPublication).toDateString()}</span>
          </Flex>
         
         
        </Flex>

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

      <Stack direction="row" mt={5} wrap={"wrap"}>
        {article.tags?.map((tag) =>  <Badge>{tag.label}</Badge>)}
       
      </Stack>
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
