import jwt from "jsonwebtoken";

const createUserToken = async (user) => {
    const token = jwt.sign(
        // payload data
        {
            id: user.id,
            name: user.name,
            cpf:user.cpf,
            isAuthorized:user.isAuthorized
        },
        "secret"
    );

    // return token
    return token
};

export default createUserToken;