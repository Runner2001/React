import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function UserContainer({ userData, fetchUsers }) {
    const alluser = userData.user.map(users => {
        return <p>{users.name}</p>
    })
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h2>{userData.loading && <h3>Loading.....</h3>}</h2>
            <div>{userData.error && <h3>{userData.error}</h3>}</div>
            <div>{!userData.error &&
                <div className='mt-5'>
                    <h2>UserData List</h2>
                    <div>
                        {alluser}
                    </div>
                </div>}</div>
        </div>
    );


    //     userData.loading ? (
    //         <h2>Loading.....</h2>
    //     ) : userData.error ? (
    //         <h2>{userData.error}</h2>
    //     ) : (
    //         <div className='mt-5'>
    //             <h2>UserData List</h2>
    //             <div>
    //                 {alluser}
    //             </div>
    //         </div>
    //     )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);