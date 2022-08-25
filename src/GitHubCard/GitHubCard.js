import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
    return(
        <div className="card">
            <Card style={{width: "25em"}}>
                <Card.Img variant="top" src={"https://github.com/imsb007c.png"}/>
                <Card.Body>
                    <Card.Title>imsb007c</Card.Title>
                    <Card.Text>
                        My name is Alex Chen
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default GitHubCard