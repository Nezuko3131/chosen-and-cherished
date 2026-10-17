const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'hw33wdbk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk0w0p1RdofqfzvsFRrKXjy66eZ6VspoL8tl05IeofZKKwvNRDuQ5EuoFFx68BmPY8G4SL2L2g1F2DjbbRv5S5ThKfUY1ss9mT1SK9VUGQTQOYwrY3M40B3xE0pX4xekwgbvKT1l0q3nrXtRXRga4HrsijxEtIf7DtPwthwTIQ2xCkl9b8e7'
});

async function populateSiteSettings() {
  console.log('Creating Site Settings document...');
  
  // First try to fetch existing document
  const existing = await client.fetch('*[_type == "siteSettings"][0]');
  
  if (existing && existing._id) {
    console.log('Updating existing Site Settings:', existing._id);
    await client.patch(existing._id).set({
      title: 'Chosen and Cherished',
      description: 'A faith-based nonprofit providing baby essentials, practical support, and community to mothers choosing life.',
      amazonWishlistUrl: 'https://www.amazon.com/baby-reg/home',
      zeffyDonationUrl: 'https://www.zeffy.com/donation-form',
      email: 'hello@chosen-and-cherished.org',
      phone: '352-433-8164',
      address: 'Florida, USA',
      socialLinks: {
        facebook: 'https://www.facebook.com/chosenandcherished',
        instagram: 'https://www.instagram.com/chosenandcherished'
      }
    }).commit();
    console.log('Site Settings updated!');
  } else {
    console.log('Creating new Site Settings...');
    await client.create({
      _type: 'siteSettings',
      _id: 'siteSettings',
      title: 'Chosen and Cherished',
      description: 'A faith-based nonprofit providing baby essentials, practical support, and community to mothers choosing life.',
      amazonWishlistUrl: 'https://www.amazon.com/baby-reg/home',
      zeffyDonationUrl: 'https://www.zeffy.com/donation-form',
      email: 'hello@chosen-and-cherished.org',
      phone: '352-433-8164',
      address: 'Florida, USA',
      socialLinks: {
        facebook: 'https://www.facebook.com/chosenandcherished',
        instagram: 'https://www.instagram.com/chosenandcherished'
      }
    });
    console.log('Site Settings created!');
  }
}

async function populateAboutPage() {
  console.log('Creating About Page document...');
  
  const existing = await client.fetch('*[_type == "aboutPage"][0]');
  
  if (existing && existing._id) {
    console.log('Updating existing About Page:', existing._id);
    await client.patch(existing._id).set({
      title: 'About Us',
      ourStory: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Chosen & Cherished was born from a simple desire: to make sure no mother feels she has to choose between keeping her baby and having the proper resources to provide for that baby\'s needs.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'This mission is deeply personal to me.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'I grew up in the Dominican Republic, where I witnessed firsthand the struggles many single mothers and families face. Then, at just 19 years old, I became one of those mothers.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'In 2006, I left a very unhealthy relationship, and came to the United States with my nine-month-old son. I had a carry-on bag and not much else. I know what it feels like to start from scratch while having a little person completely dependent on you. I was terrified, yet determined to create a better life for my son.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'That experience never left me.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Today, when I see a young mother struggling financially, facing pregnancy alone, or rebuilding her life after leaving a difficult situation, I see a younger version of myself in her.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'For years, I have quietly helped mothers by using my own resources and collecting donated baby items from our community. After seeing the overwhelming generosity of people willing to help, I realized this could become something much bigger.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Chosen & Cherished was born.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We are a faith-based organization providing baby essentials, practical support, and community to mothers choosing life.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Because when a mother sees a positive pregnancy test, the cost of diapers, clothing, a car seat, or a safe place for her baby to sleep should never be the reason she feels she cannot choose her child.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Our purpose is simple: to remind every mother that she doesn\'t have to walk this journey alone.'
            }
          ]
        },
        {
          _type: 'block',
          bold: true,
          lightGreen: true,
          children: [
            {
              _type: 'span',
              text: 'She choose life. We choose to walk beside her.'
            }
          ]
        }
      ],
      mission: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Our mission is to provide essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship.'
            }
          ]
        }
      ],
      vision: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We envision a community where no mother feels alone during pregnancy or early parenthood, where every baby has their basic needs met, and where families are supported with dignity and love.'
            }
          ]
        }
      ],
      values: [
        {
          title: 'Compassion',
          description: 'We approach every mother and family with genuine care and understanding, recognizing the challenges they face.'
        },
        {
          title: 'Dignity',
          description: 'We believe every family deserves to be treated with respect and honor, never feeling like charity cases.'
        },
        {
          title: 'Hope',
          description: 'We are committed to providing not just material support, but emotional encouragement and hope for brighter tomorrows.'
        },
        {
          title: 'Community',
          description: 'We build connections between families, creating a support network that extends beyond our direct services.'
        },
        {
          title: 'Faith',
          description: 'Our work is grounded in the belief that every life has purpose and value, and that communities can transform lives.'
        }
      ]
    }).commit();
    console.log('About Page updated!');
  } else {
    console.log('Creating new About Page...');
    await client.create({
      _type: 'aboutPage',
      _id: 'aboutPage',
      title: 'About Us',
      ourStory: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Chosen & Cherished was born from a simple desire: to make sure no mother feels she has to choose between keeping her baby and having the proper resources to provide for that baby\'s needs.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'This mission is deeply personal to me.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'I grew up in the Dominican Republic, where I witnessed firsthand the struggles many single mothers and families face. Then, at just 19 years old, I became one of those mothers.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'In 2006, I left a very unhealthy relationship, and came to the United States with my nine-month-old son. I had a carry-on bag and not much else. I know what it feels like to start from scratch while having a little person completely dependent on you. I was terrified, yet determined to create a better life for my son.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'That experience never left me.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Today, when I see a young mother struggling financially, facing pregnancy alone, or rebuilding her life after leaving a difficult situation, I see a younger version of myself in her.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'For years, I have quietly helped mothers by using my own resources and collecting donated baby items from our community. After seeing the overwhelming generosity of people willing to help, I realized this could become something much bigger.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Chosen & Cherished was born.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We are a faith-based organization providing baby essentials, practical support, and community to mothers choosing life.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Because when a mother sees a positive pregnancy test, the cost of diapers, clothing, a car seat, or a safe place for her baby to sleep should never be the reason she feels she cannot choose her child.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Our purpose is simple: to remind every mother that she doesn\'t have to walk this journey alone.'
            }
          ]
        },
        {
          _type: 'block',
          bold: true,
          lightGreen: true,
          children: [
            {
              _type: 'span',
              text: 'She choose life. We choose to walk beside her.'
            }
          ]
        }
      ],
      mission: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Our mission is to provide essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship.'
            }
          ]
        }
      ],
      vision: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'We envision a community where no mother feels alone during pregnancy or early parenthood, where every baby has their basic needs met, and where families are supported with dignity and love.'
            }
          ]
        }
      ],
      values: [
        {
          title: 'Compassion',
          description: 'We approach every mother and family with genuine care and understanding, recognizing the challenges they face.'
        },
        {
          title: 'Dignity',
          description: 'We believe every family deserves to be treated with respect and honor, never feeling like charity cases.'
        },
        {
          title: 'Hope',
          description: 'We are committed to providing not just material support, but emotional encouragement and hope for brighter tomorrows.'
        },
        {
          title: 'Community',
          description: 'We build connections between families, creating a support network that extends beyond our direct services.'
        },
        {
          title: 'Faith',
          description: 'Our work is grounded in the belief that every life has purpose and value, and that communities can transform lives.'
        }
      ]
    });
    console.log('About Page created!');
  }
}

async function main() {
  try {
    await populateSiteSettings();
    console.log('');
    await populateAboutPage();
    console.log('');
    console.log('All documents populated successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
