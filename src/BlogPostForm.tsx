import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {PostDTO} from "./api/models/PostDTO";

type Props = {
    onPostSubmit: (blogPost: PostDTO) => void;
};

function BlogPostForm(props: Props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form validated={validated} className="mb-3" style={{width: "60vw"}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Enter the title" size="lg"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Text</Form.Label>
                <Form.Control required as="textarea" rows={3}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLinkName">
                <Form.Label>Link name</Form.Label>
                <Form.Control type="text" placeholder="Enter the name of the link"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLinkName">
                <Form.Label>Link URL</Form.Label>
                <Form.Control type="url" placeholder="Enter the link"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    );
}

export default BlogPostForm;