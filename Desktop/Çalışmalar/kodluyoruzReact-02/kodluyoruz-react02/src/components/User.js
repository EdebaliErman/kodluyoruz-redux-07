import PropTypes from 'prop-types';

function User({ friends, name, surname, isLoggedIn, age }) {

    return (
        <>

            <h1>
                {isLoggedIn ? ` ${name} ${surname}  ${age} ` : " Giriş yapınız"}
            </h1>

            {
                friends && friends.map(frend => (<div key={frend.id}> {frend.id} {frend.name} </div>))
            }
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.number.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    friends: PropTypes.array

};

export default User;