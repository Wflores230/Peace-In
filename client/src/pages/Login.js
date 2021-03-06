import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import SignUp from './Signup';

//Actions
import { signinUser } from '../utils/actions'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            signInError: '',
            token: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit() {
        const loginUser = {
            email: this.state.login_email,
            password: this.state.login_password
        }

        const res = await signinUser(loginUser);
        console.log(res);
        if (res.success) {
            this.setState({
                signInError: res.message,
                token: res.token
            });
            this.props.handleUserLogin()
            this.props.history.push("/")
        }
        else {
            this.setState({
                signInError: res.message
            });
        }
    }

    render() {
        const {
            signInError,
            token
        } = this.state;

        if (!token) {
            return (
                <div className="Login_CSS">
                    <div className="jumbotron">
                        <Container>
                            <h1>Login</h1>
                            <Form>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="login_email"
                                        id="login_email"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="password"
                                        name="login_password"
                                        id="login_password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Form>
                            <Row>
                                <Col>
                                    {
                                        (signInError) ? (
                                            <p>{signInError}</p>
                                        ) : (null)
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <SignUp />
                                </Col>
                                <Col>
                                    <Button color="primary" onClick={this.onSubmit}>Login</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            );
        }
    }
}