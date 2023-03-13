import React from 'react';
import { render,screen } from "@testing-library/react";
import App from "./App";

import user from '@testing-library/user-event';
import "@testing-library/jest-dom";

test("Testing user and email added in list",()=>{

    render(<App/>);

    const nameInput = screen.getByRole('textbox',{
        name: /name/i
    });

    const emailInput = screen.getByRole('textbox',{
        name: /email/i
    });


    user.click(nameInput);
    user.keyboard('abc');

    user.click(emailInput);
    user.keyboard('kri');

    const button = screen.getByRole('button');
    user.click(button);

    

     const name = screen.getByRole('cell', { name: 'abc' });
     const email = screen.getByRole('cell', { name: 'kri' });

     expect(name).toBeInTheDocument();
     expect(email).toBeInTheDocument();

});