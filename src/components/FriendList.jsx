import FriendListItem from './FriendListItem'

const FriendList = ({friends}) => {
    return (
<ul>
            {friends.map((friend) => {
                return (
        <li>
            <FriendListItem
                avatar={friend.avatar}
                name={friend.mane}
                isOnline={friend.isOnline}/>
        </li>)
    })
    }
	
</ul>)
 };

export default FriendList;