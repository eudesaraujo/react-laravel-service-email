import React, { useState } from "react";
import './App.css';
import { Form, Button , Container, Col,  Row  } from 'react-bootstrap';
import api from './api';
import {ToastContainer, toast} from "react-toastify"


function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true)
 
    let params = {
      email,
      subject,
      message
    }
    api.post('send-email',params)
    .then(res => {
      toast.success("E-mail enviado")
      setLoading(false)
      handleReset()
    })
    .catch(error => {
        setLoading(false)
        toast.error("Ops! ocorreu um erro.")
    })
  }

  const handleReset  = () =>{
    setEmail("")
    setSubject("")
    setMessage("")
  }


  return (
    <>
      <ToastContainer />
      <Container id="container"> 
        <Form onSubmit={handleSubmit}>

          <Form.Group as={Row} className="mb-3">

              <Form.Label column sm={1} >*Para:</Form.Label>

              <Col sm={11}>

                <Form.Control 
                  type="email" 
                  value={email}
                  required={true}
                  placeholder="name@example.com" 
                  onChange={e => setEmail(e.target.value)} 
                />

              </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">

              <Form.Label name="subject" column sm={1}>*Assunto:</Form.Label>

              <Col sm={11}>
                <Form.Control 
                  name="subject" 
                  id="subject"  
                  required={true}
                  type="text"
                  value={subject}
                  onChange={e => setSubject(e.target.value)} 
                  />
              </Col>

          </Form.Group>

          <Form.Group>

            <Form.Label >*Mensagem:</Form.Label>

            <Form.Control
              as="textarea"
              className="textarea"
              required={true}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

          </Form.Group>

          <Row className="formButtons" >
            <div>
              <Button disabled={isLoading} onClick={handleReset} variant="outline-danger">Cancelar</Button>
            </div>
            <div style={{marginLeft:"10px"}} >
              <Button 
                type="submit"  
                disabled={isLoading} 
                variant="outline-primary">
                {isLoading ? 'Enviando…' : 'Enviar'}
                </Button>
            </div>
          </Row>

        </Form>
      </Container> 
    </>
  );

  
}



export default App;
