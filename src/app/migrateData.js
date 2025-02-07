import dotenv from 'dotenv';
import axios from 'axios';
import sanityClient from '@sanity/client';

// Load environment variables
dotenv.config();

// Initialize Sanity client
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// Function to fetch mock data from an API
const fetchMockData = async () => {
  try {
    const response = await axios.get('/api/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from MockAPI:', error);
    return [];
  }
};

// Function to migrate data to Sanity
const migrateData = async () => {
  const menuItems = await fetchMockData();

  if (menuItems.length === 0) {
    console.log('No data found to migrate.');
    return;
  }

  for (const item of menuItems) {
    try {
      const doc = {
        _type: 'menuItem',
        name: item.name,
        price: item.price,
        category: item.category,
        image: item.image,
      };

      const result = await client.create(doc);
      console.log(`✅ Migrated: ${item.name} -> Sanity ID: ${result._id}`);
    } catch (error) {
      console.error(`❌ Failed to migrate ${item.name}:`, error);
    }
  }
};

// Execute the migration
migrateData();
