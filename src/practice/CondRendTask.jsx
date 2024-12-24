import React from "react";
import Table from 'react-bootstrap/Table';

function CondRendTask() {
    const user = "student"
    if (user == "studen") {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Student Name</th>
                            <th>Section</th>
                            <th>Attendence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>A</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>B</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Willi</td>
                            <td>A</td>
                            <td>Present</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
    else {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Staff Name</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Telugu</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Hindi</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Willi</td>
                            <td>English</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jack</td>
                            <td>Maths</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>John</td>
                            <td>Physic</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Lilli</td>
                            <td>Chemistry</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CondRendTask;