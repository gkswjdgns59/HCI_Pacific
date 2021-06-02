# Team Pacific : Aster

> https://aster-42bcb.web.app/ 

> Party managing system for off-campus homeloners

> POV: Aster met off campus home loner who holds the home party. Aster is amazed to realize that he/she quite often feels burdened to talk about subtle upset, regarding home party. So, it’d be game-changing for Aster to convey messages (home party manner), preventing conflicts in human relationship.

## Table of Contents

- [Libraries](#libraries)
  - [Library and Frameworks](#library-and-frameworks)
- [Codes-pages](#codes-pages)
  - [PageHome.js](#pagehome)
  - [PageOpen.js](#pageopen)
  - [PageEdit.js](#pageedit)
  - [PageParties.js](#pageparties)
  - [PageParty.js](#pageparty)
  - [PageGuestbook.js](#pageguestbook)
  - [PageGuestInfo.js](#pageguestinfo)
  - [PageMypage.js](#pagemypage)
- [Codes-components](#codes-components)
  - [Auth.js](#auth)
  - [HomeHeader.js](#homeheader)
  - [Header.js](#header)
  - [OpenPartyInfo.js](#openpartyinfo)
  - [OpenPartyNotices.js](#openpartynotices)
  - [OpenPartyGuests.js](#openpartyguests)
  - [Parties.js](#parties)
    - [Single_party.js](#single_party)
    - [Empty_party.js](#empty_party)
  - [PartiesMain.js](#partiesmain)
  - [Guests.js](#guests)
    - [SelectGuestDialog.js](#selectguestdialog)
    - [Single_guest.js](#single_guest)
    - [Empty_guest.js](#empty_guest)
  - [Roulette.js](#roulette)
  - [Firebase.js](#firebase)
  - [App.js](#app)
- [Hosting](#hosting)

---

## Libraries

### Library and Frameworks

_**React**_   for component-based coding

_**Material-ui**_ for convenient ui build

_**Bootstrap**_ for grid system

_**Firebase**_ to save data

_**React-router-dom**_ for routing

_**React-custom-roulette**_ for roulette implement

--- 

## Codes-pages

### PageHome
> PageHome.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120479273-b9162f80-c3e8-11eb-9669-34972045e25e.PNG"
  width="650" >
</p>

**Role of the page**

- Homepage, where you signup or login.

**Components**
- [Auth.js](#auth)
- [HomeHeader.js](#homeheader)
- [Header.js](#header)

**Description**
- You can signup and login to your page. It shows our logo and explains our project. 

<br/>

### PageOpen
> PageOpen.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120491040-e0bec500-c3f3-11eb-8965-24e0e037e05c.PNG"
  width="650" >
</p>

**Role of the page**

- Opening party by typing in information and sending invitations to selected guests.

**Components**
- [OpenPartyInfo.js](#openpartyinfo)
- [OpenPartyNotices.js](#openpartynotices)
- [OpenPartyGuests.js](#openpartyguests)
    - [SelectGuestDialog.js](#selectguestdialog)
    - [Single_guest.js](#single_guest)

**Description**
- Set your party name, date/time, location and additional information, and select your guests. You can ‘Open Only’ or ‘Open and Send’ to your friends. 

<br/>

### PageEdit
> PageEdit.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120491417-2ed3c880-c3f4-11eb-9b33-c8f1abcefbad.PNG"
  width="650" >
</p>

**Role of the page**

- Editing information about the party.

**Components**
- [EditPartyInfo.js](#editpartyinfo)
- [EditPartyNotices.js](#editpartynotices)

**Description**
- Edit the information if you had made mistakes or typos.

<br/>


### PageParties
> PageParties.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120492136-c46f5800-c3f4-11eb-8c54-ee729d1be07c.PNG"
  width="650" >
</p>

**Role of the page**

- View all parties you have, both previous and upcoming. Click ‘+’ to open a new party. 

**Components**
- [Parties.js](#parties)
    - [Single_party.js](#single_party)
    - [Empty_party.js](#empty_party)

**Description**
- View the parties with cards containing party name, date/time, number of guests, etc. You can sort by ‘all’, ‘previous’, and ‘upcoming’. Also, you can search party by its name. 

<br/>

### PageParty
> PageParty.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120492400-03051280-c3f5-11eb-80e5-a588ffbef8d6.PNG"
  width="650" >
</p>

**Role of the page**

- Manage each party and party guests. 

**Components**
- [PartiesMain.js](#partiesmain)
- [Guests.js](#guests)
    - [SelectGuestDialog.js](#selectguestdialog)
    - [Single_guest.js](#single_guest)
    - [Empty_guest.js](#empty_guest)

**Description**
- You can go to edit information, add new guests, and send more invitations. Also, click ‘+’ below the guest to give them coins.

<br/>

### PageGuestbook
> PageGuestbook.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120493066-98080b80-c3f5-11eb-86c4-c3e9337ad32c.PNG"
  width="650" >
</p>

**Role of the page**

- View all the list of guests you have. Add new guests. 

**Components**
- [Guests.js](#guests)
    - [SelectGuestDialog.js](#selectguestdialog)
    - [Single_guest.js](#single_guest)
    - [Empty_guest.js](#empty_guest)

**Description**
- It shows all your guests, along with each guest’s coins. You can click onto each guest to manage more. 

<br/>

### PageGuestInfo
> PageGuestInfo.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120493135-a8b88180-c3f5-11eb-9266-42d06bcea482.PNG"
  width="650" >
</p>

**Role of the page**

- Managing each guest.

**Components**
- [Roulette.js](#roulette)

**Description**
- You can play the roulette when the guest has enough coins. The present they won will be tracked on the right. You can also manage their coins on the bar below the guest. 

<br/>

### PageMypage
> PageMypage.js

<p align="center">
<img src="https://user-images.githubusercontent.com/83863073/120493708-254b6000-c3f6-11eb-901d-102c3766abd5.PNG"
  width="650" >
</p>

**Role of the page**

- Create your default settings of notices, location, and wishlist.

**Components**
- [Mypage.js](#mypage)

**Description**
- The presets set here will be shown when opening a new party.

<br/>
<br/>

---------------------

## Codes-components

### Auth 
> Auth.js
- Login of the website
- (Logout not yet implemented)

<br/>

### HomeHeader 
> HomeHeader.js
- Header with ‘signup’ and ‘login’

<br/>

### Header 
> Header.js
- Navigator header, where you can go to ‘home’, ‘parties’, ‘guests’, and ‘mypage’
- It is on every page, exept for the homepage before login

<br/>

### OpenPartyInfo
> OpenPartyInfo.js
- Type in your party name, date/time, location, and memo
- You can also pick date/time from date-time picker on the right

<br/>

### OpenPartyNotices
> OpenPartyNotices.js
- Check/uncheck whether you want to send your wishlist
- Check/uncheck your default notices, or edit it
- Also you can add new notice 

<br/>

### OpenPartyGuests
> OpenPartyGuests.js
- Select guests from the guestbook, or add new guests directly to invite to your party
- You can also uncheck the pre-selected guests, if you have clicked wrong

<br/>

### EditPartyInfo
> EditPartyInfo.js
- Editing area of party date/time, location and memo

<br/>

###  EditPartyNotices
> EditPartyNotices.js
- Editing area of party notices and whether to send wishlist

<br/>

###  Parties
> Parties.js
- Showing all parties you have

<br/>

###  Single_party
> Single_guest.js
- Returns the party card of each party, with party name, date/time, number of guests, preview of guests, and whether it is ‘previous’ or ‘upcoming’ party

<br/>

###  Empty_party
> Empty_guest.js
- ‘+’ button to click on to add new party

<br/>

###  PartiesMain
> PartiesMain.js
- Area displaying party information and containing button to edit the information or to send the invitation

<br/>

###  Guests
> Guests.js
- Showing all guests you have

<br/>

###  SelectGuestDialog
> SelectGuestDialog.js
- Popup accordion enabling you to select guests
- You can choose from the guestbook by searching and selecting them, or directly adding new guests

<br/>

###  Single_guest
> Single_guest.js
- Returns each guest with their blob(shape), name, and coin managing bar

<br/>

###  Empty_guest
> Empty_guest.js
- ‘+’ button to click on to add new guest

<br/>

###  Roulette
> Roulette.js
- Roulette component which you can use when exchanging coins to real life gifts
- (We will later manage to implement the roulette setting in mypage)

<br/>

###  Mypage
> Mypage.js
- Where you can make your own presets of notices, location, and wishlist (Preset for the roulette will later be implemented)

<br/>


###  Firebase
> Firebase.js
- Code used in several files in order to get access to firebase database

<br/>

###  App
> App.js
- Where our page routing code code is

<br/>


------------
## Hosting

_Hosting Information_

- **Firebase Hosting**: We used firebase and react. Therefore, we managed to uese Firebase for hosting






