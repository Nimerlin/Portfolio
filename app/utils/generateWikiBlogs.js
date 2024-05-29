// useWikiData.js
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

const baseUrl = 'https://github.com/Nimerlin/Portfolio/wiki';

export const useFetchWikiList = () => {
  const [wikiList, setWikiList] = useState([]);

  useEffect(() => {
    const fetchWikiList = async () => {
      try {
        const response = await fetch(`${baseUrl}`);
        const body = await response.text();
        const $ = cheerio.load(body);

        const links = [];
        $('a.wiki-page-link').each((i, element) => {
          const link = $(element).attr('href');
          links.push(`${baseUrl}${link}`);
        });

        setWikiList(links);
      } catch (error) {
        console.error('Error fetching wiki list:', error);
      }
    };

    fetchWikiList();
  }, []);

  return wikiList;
};

export const useFetchWikiContent = (url) => {
  const [wikiContent, setWikiContent] = useState({ title: '', description: '', imageUrl: '' });

  useEffect(() => {
    const fetchWikiContent = async () => {
      try {
        const response = await fetch(url);
        const body = await response.text();
        const $ = cheerio.load(body);

        const title = $('h1').first().text().trim();
        const description = $('div.markdown-body p').first().text().trim();
        const imageSrc = $('div.markdown-body img').first().attr('src') || '/images/profile/devops-img.gif'; // Default image if none found

        // Ensure the image URL is absolute
        const imageUrl = imageSrc.startsWith('http') ? imageSrc : `https://github.com${imageSrc}`;

        setWikiContent({ title, description, imageUrl });
      } catch (error) {
        console.error('Error fetching wiki content:', error);
      }
    };

    fetchWikiContent();
  }, [url]);

  return wikiContent;
};
