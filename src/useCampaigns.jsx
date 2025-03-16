import { useState, useEffect } from 'react';

const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        // Simulated API call with mock data
        const mockData = [
          {
            id: 1,
            brand: {
              name: "Nike",
              logo: "https://i.pinimg.com/736x/6e/41/bd/6e41bd29aace23e20a84a080054105fb.jpg",
              description: "Promote Nike's latest sneakers"
            },
            payout: { type: "fixed", value: "₹15000" },
            progress: { hired: 5, total: 10 },
            duration: "15-30 June 2025"
          },

          {
            id: 2,
            brand: {
              name: "Addidas",
              logo: "https://reverebd.com/wp-content/uploads/2019/08/Adidas-Black1.jpg",
              description: "Sales Addidas's old stock t-shirts completely free"
            },
            payout: { type: "barter", value: "₹0" },
            progress: { hired: 8, total: 10 },
            duration: "1 June 2025"
          },
          {
            id: 3,
            brand: {
              name: "Puma",
              logo: "https://sharkshirts.in/wp-content/uploads/2023/07/Puma-Oversized-T-Shirt-scaled.jpg",
              description: "Shop the latest Puma t-shirts and enjoy up to 30% refunds on any damages."
            },
            payout: { type: "refunds", value: "₹3000 - ₹5000 " },
            progress: { hired: 7, total: 10 },
            duration: "10 June 2025"
          },
         
        ];
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCampaigns(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return { campaigns, loading, error };
};

export default useCampaigns;