import { Component } from "react";

class Data extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        return (
            <div align="center">
                <h1>Student Data</h1>
                <table border={1} cellspacing={0} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>Srno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>City</th>
                            <th>Course</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dt.map((val, index) => {
                                const { id, name, email, password, course, city } = val;
                                return (
                                    <tr key={++index}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{city}</td>
                                        <td>
                                            <table cellspacing={2} cellPadding={3}>
                                                {
                                                    course.map((c) => {
                                                        return (
                                                            <tr>
                                                                <td>{c}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </table>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
export default Data;