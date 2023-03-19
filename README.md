# How to Use?

This is component library which has two screens:

|Components      |Exposed Props                  |Description                  				        |
|----------------|-------------------------------|--------------------------------------------------|
|Sign			 |`handleLoginButton`            |this is where you will write your login logic     |
|				 |`handleForgotPassword`         |this is where you will write your forgot pwd logic|
|SignUp          |`handleSignUpButton`           |this is where you will write your signup logic    |

No shit sherlock right! :P

# Things to Remember
Since this is just a tailwind plugin, so lil bit config will be required before you can use it.

```js
module.exports = {
                    content:  [...,
                                ./node_modules/@prom_ayushp/user-screens/**/*.js', ],
                               ...,
                 }
```
ofc, you should have default tailwind configured as well, visit official documentation of tailwind for that.

Happy coding!!
