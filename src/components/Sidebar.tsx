import { ChatIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <List color={'white'} background={'#1a202c'} height={'100%'} fontSize={{base:'0.6em', md:'0.8em', lg:'1em'}} spacing={5} p={5} >
            <ListItem>
                <ListIcon as={HamburgerIcon}/>
                <NavLink to={'/'}>Dashboard</NavLink>
            </ListItem>

            <ListItem>
                <ListIcon as={ChatIcon}/>
                <NavLink to={'/articles'}>Articles</NavLink>
            </ListItem>

            <ListItem>
                <ListIcon as={EditIcon} />
                <NavLink to={'/new-article'}>New Article</NavLink>
            </ListItem>
            
        </List>
    )
}

export default Sidebar