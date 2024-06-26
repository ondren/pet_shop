import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {useDispatch} from "react-redux";
import {changeStatus, setData} from "../features/userState/userStateSlice";


const Auth = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            dispatch(setData(data))
            dispatch(changeStatus(true))
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Login' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="password"
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                            No account?
                            <NavLink to={REGISTRATION_ROUTE}> Registration</NavLink>
                            </div>
                            :
                            <div>
                                Already have account?
                                <NavLink to={LOGIN_ROUTE}> Login</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-secondary"}
                            onClick={() => click()}
                        >
                            {isLogin ? "Login" : "Registration"}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;