
import UserForm from "./UserForm";
import {screen,render} from '@testing-library/react';
import user from '@testing-library/user-event';

test('it shows 2 input and a button',()=>{

  render(<UserForm/>);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
 // expect(button).toBeInTheDocument();

});

test('OnUserAdd when click the submit form',()=>{
    //Method 1
    // const argList=[];
    // const callback=(...args)=>{
    //     argList.push(args);
    // }

    const mock = jest.fn();

    // render(<UserForm onUserAdd={callback}/>);
    render(<UserForm onUserAdd={mock}/>);

    //const[nameInput,emailInput] = screen.getAllByRole('textbox');
    
    const nameInput = screen.getByRole('textbox',{
        name: /enter name/i
    });

    const emailInput = screen.getByRole('textbox',{
        name: /enter email/i
    });



    user.click(nameInput);
    user.keyboard('abc');

    user.click(emailInput);
    user.keyboard('kr@yr');

    const button = screen.getByRole('button');
    user.click(button);

    // expect(argList[0]).toHaveLength(1);
    // expect(argList[0][0]).toEqual({name:'abc',email:'kr@yr'});

    expect(mock).toHaveBeenCalled;
    expect(mock).toHaveBeenCalledWith({name:'abc',email:'kr@yr'});


});


test("Testing the feilds after the submitting",()=>{
   
    render(<UserForm onUser={()=>{}}/>);

    const nameInput = screen.getByRole('textbox',{
        name: /enter name/i
    });

    const emailInput = screen.getByRole('textbox',{
        name: /enter email/i
    });



    user.click(nameInput);
    user.keyboard('abc');

    user.click(emailInput);
    user.keyboard('kr@yr');

    const button = screen.getByRole('button');
    user.click(button);

    expect(nameInput).toHaveValue('');
    expext(emailInput).toHaveValue('');

});
