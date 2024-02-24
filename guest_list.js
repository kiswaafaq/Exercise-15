"use strict";
let guest_list = ['Kiswa', 'Uzma', 'Ajia'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');
}
let absent_Guest = 'Ajia';
let new_guest = 'Afaq';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');
}
console.log(`Ms. ${absent_Guest} is not coming to the party.`);
