import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { Article } from "../pages/Articles"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"


type DeleteModalProps = {
    isOpen: boolean,
    onClose: any,
    articles: Article[],
    setArticles: any
    selectedArticle: any
}


export default function DeleteModal({ isOpen, onClose, selectedArticle, articles, setArticles }: DeleteModalProps) {
   
    const mutation = useMutation({
        mutationFn: (id:number) => {
          return axios.delete(`http://localhost:8000/articles/${id}`)
        },
      })

    const handleDelete = () => {
        onClose()
        mutation.mutate(selectedArticle.id)
        let copy = [...articles]
        let index = articles.findIndex((article) => article.id == selectedArticle.id)
        copy.splice(index, 1)
        setArticles(copy)
    }
    return (
      <>
       
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Message</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Are you sure you want to delete the article <strong>{selectedArticle?.title}</strong>?
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={handleDelete}>
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }