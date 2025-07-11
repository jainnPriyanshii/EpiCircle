#  EcoCycle — React Native (Epicircle)

EcoCycle is a simplified dual-role pickup app built using **React Native (Expo)**.  
It includes:
- **Customer App** – Schedule pickups and approve them
- **Partner App** – Accept requests, add item details, and complete pickups

---
###  Customer App
- 🔐 Phone number + OTP-based login (mocked)
- 🗓 Schedule a pickup (date, time, address)
- 📜 View pickup request history & current status
- ✅ Approve pickup details after item review

###  Partner App
- 🔐 Partner login with OTP (mocked)
- 📋 View assigned pickups
- ✅ Accept, Start, Add item details, Submit for approval

### Credentials & Codes

OTP (for login)       | `123456`           
Pickup Code (for partner) | `ABC123`  


### Tech Stack

- React Native (Expo)
- React Navigation
- Context API
- AsyncStorage
- `react-native-uuid` (for unique IDs)

---

### Backend 

No real backend or API is used.  
All data is handled via:
- `useContext` (state)
- `AsyncStorage` (session persistence)

---

##  Installation & Running

```bash
git clone https://github.com/yourusername/ecocycle.git
cd ecocycle
npm install
npx expo start
