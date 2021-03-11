class BotError {
    __constructor(error = {message: "Something went wrong", details: '', error: ''}){
        this.message = error.message;
        this.details = error.details;
        this.error = error.error;

        // Database error save
    }
}

module.exports = BotError;