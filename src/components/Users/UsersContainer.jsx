import React from 'react' 
import { connect } from 'react-redux'
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers} 
    from '../redux/users-reduser'
import Users from './Users'
import Prelouder from '../Common/Prelouder/Prelouder'




class UsersContainer extends React.Component {
    
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
}

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

}   


    render() { 
        return <> 
            {this.props.isFetching ? 
              <Prelouder />
           : null } 
             <Users totalUsersCount={this.props.totalUsersCount} 
                    pageSize = {this.props.pageSize}
                    currentPage ={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress = {this.props.followingInProgressм}
        /> 
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}



export default connect (mapStateToProps, 
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}) (UsersContainer)