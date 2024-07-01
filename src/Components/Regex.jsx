import React, { useEffect, useState } from "react";

const Regex = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("✅");
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters long and contain letters and numbers"
            );
        } else {
            setPasswordError("✅");
        }
    };

    const [count, setcount] = useState(10);
    useEffect(() => {
        const counts = `${count}`;
    });

    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
    }

    return (
        <section className=" py-2">
            <div className="container">
                <h2 className=" mt-5 text-center fw-bold">
                    ValidatePassword
                </h2>
                <div className=" password-box mt-3">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            validateEmail();
                            validatePassword();
                        }}
                    >
                        <div className=" mt-3">
                            <label htmlFor="email" className=" me-5">Email :</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={validateEmail}
                                aria-describedby="emailError"
                                className="input1"
                            />
                            {emailError && <span id="emailError" style={{ color: 'red' }}>{emailError}</span>}
                        </div>
                        <div className=" mt-3">
                            <label htmlFor="password" className=" me-3">Password :</label>
                            <input
                                id="password"
                                type={inputType}
                                value={password}
                                onChange={handlePasswordChange}
                                onBlur={validatePassword}
                                aria-describedby="passwordError"
                                className="input1"
                            />
                            <button onClick={togglePasswordVisibility} className="btn-send py-1 px-2 -ms-10 text-white fw-semibold">show</button>
                            {passwordError && <span id="passwordError" style={{ color: 'red' }}>{passwordError}</span>}
                        </div>
                        <button type="submit" className=" py-2 px-3 mt-3 btn-send text-white fw-semibold">Submit</button>
                    </form>
                </div>
                <h2 className=" mt-5 text-center fw-bold">
                    UseEffect
                </h2>
                <div className=" useeffect mt-3">
                    <div className=' d-flex flex-column align-items-center my-5 gap-2'>
                        <p className=" fs-5 fw-semibold">{count}</p>
                        <div className=" d-flex align-items-center gap-3">
                            <button className=' py-2 px-3 mt-3 btn-send text-white fw-semibold fs-5' onClick={() => setcount(count + 1)}>+</button>
                            <button className=' py-2 px-3 mt-3 btn-send text-white fw-semibold fs-5' onClick={() => setcount(count - 1)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Regex;
