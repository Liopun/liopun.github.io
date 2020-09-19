import React from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faExclamation, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { CardWrapper, CardTitle, CardContent, CardBody, Container, ListContainer, ListItem, Content } from "../styles/intro"

const Intro = ({ profile, data }) => {
    const iconMap = {
        email: faEnvelope,
        phone: faPhone,
        location: faMapMarkerAlt,
        linkedin: faLinkedin,
        github: faGithub,
    }
    const contacts = data

    return (
        <>
            <CardWrapper>
                <CardTitle>
                    <div className="custom-file-upload fas">
                        <div className="img-wrap" >
                            <img htmlFor="photo-upload" src={profile.node.image}/>
                        </div>
                        <div className="text-wrap">
                            <h1 className="profile-name">{profile.node.name}</h1>
                            <h3 className="profile-title">{profile.node.title}</h3>
                        </div>
                    </div>
                </CardTitle>
                <CardContent>
                    <ListContainer>
                        {contacts.edges.length > 0 && contacts.edges.map((item, i) => (
                            <ListItem>
                                <FontAwesomeIcon icon={iconMap[item.node.type]} />
                                <a href={item.node.url} target='_blank' rel="noopener noreferrer">
                                    {item.node.value}
                                </a>
                            </ListItem>
                        ))}
                    </ListContainer>
                </CardContent>
            </CardWrapper>
        </>
    )
}

export default Intro