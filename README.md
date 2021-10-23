# Responsive-CHALLENGE
Weeks 03, 04, 05 & 06.

## Project Description:
The student have to develop a news portal, it has to be responsive in order to adapt to different devices. Also, the news portal has a register form for new users. The fields from the form has the proper validations.
Once the user succesfully register his information is going to be stored in the local storage.

**Validations logic**

First of all i declare the variables which contains the selectors of the elements from the DOM, as well as the regex.

![Screenshot from 2021-10-17 19-37-49](https://user-images.githubusercontent.com/90876581/137647931-51f86a16-a08f-4088-8413-17c115fa30c5.png)
![Screenshot from 2021-10-17 19-38-14](https://user-images.githubusercontent.com/90876581/137647937-8052cc4f-8c39-4a14-a8c4-616d79209665.png)

Then i created functions in order to reuse code related to the styles.

![Screenshot from 2021-10-17 19-40-33](https://user-images.githubusercontent.com/90876581/137647947-d2e97b13-fc0a-4038-893b-b63d5e285a56.png)

After that i created, for each field, a function that's going to be useful to validate the input as well as the final validation
with the emergent board which will contain the user data or the invalid inputs.

![Screenshot from 2021-10-17 19-44-08](https://user-images.githubusercontent.com/90876581/137647959-47913243-3921-4785-beea-3a0d4f968900.png)

Then i added events to the elements (blur, focus).

![Screenshot from 2021-10-17 19-44-22](https://user-images.githubusercontent.com/90876581/137647964-5763ef05-fb47-4439-8b75-1870e3de701f.png)

**Sending user data**

Via GET method we send the user info to the server:

![Screenshot from 2021-10-23 12-46-49](https://user-images.githubusercontent.com/90876581/138563641-8a24b180-6132-4b01-b07e-f3e31cb99b3f.png)

New functions were added in order to show a modal with the proper message, one for success and one to show if there was any error:

![Screenshot from 2021-10-23 12-47-44](https://user-images.githubusercontent.com/90876581/138563655-92294e31-8be5-47f3-84b5-72da32c56bcf.png)

**Saving user data in the local storage**

You can checkout the data has been successfully saved in the local storage following these steps:
1. Right click and select Inspect.

![screenshot01](https://user-images.githubusercontent.com/90876581/136715447-d2e9b2e4-71ac-486b-bffc-8bca2fb4b25f.png)

2. Click on Application.

![Screenshot from 2021-10-23 13-06-35](https://user-images.githubusercontent.com/90876581/138563574-7e382ef5-6a50-4fa4-9a03-717557e1a124.png)

3. Click on Local Storage.

![Screenshot from 2021-10-23 13-07-43](https://user-images.githubusercontent.com/90876581/138563598-6c58f86c-0048-4573-9fe6-c3438497eac4.png)

4. Check the info is correct.

![Screenshot from 2021-10-23 12-58-58](https://user-images.githubusercontent.com/90876581/138563617-d92e8946-0b6b-4bb0-b430-c634e643bd57.png)

## Tested in these devices:
1. Samsung Galaxy A32
2. Motorola G7 plus
3. Motorola G4
4. Iphone X
5. Ipad pro
6. Lenovo Ideapad
7. Acer F5

**Steps to check out the Project:**

1. Go to the github repositorie: https://github.com/rodrisibrins/responsive-challenge
2. Click on Code button
3. Click on Download ZIP
4. Extract files
5. Open index.html

---
## Github pages URL

**Radium News Index Version 2.0.0**

https://rodrisibrins.github.io/responsive-challenge/index.html

**Radium News Register Version 2.0.0**

https://rodrisibrins.github.io/responsive-challenge/register.html
## Developer

- Rodrigo Sibrins <rodrigo.sibrins@radiumrocket.com>
