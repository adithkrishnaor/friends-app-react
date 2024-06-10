import React, { useEffect, useState } from 'react'

const ViewAll = () => {

    const [data, setData] = useState(
        [
            {
                "name": "Ramesh",
                "friendName": "Tovino",
                "friendNickName": "TT",
                "DescribeYourFriend": "Test desc"

            }
        ]
    )
    useEffect(()=> {},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend Name</th>
                                    <th scope="col">Friend Nick Name</th>
                                    <th scope="col">Describe Friend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                            <th scope="row">1</th>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll