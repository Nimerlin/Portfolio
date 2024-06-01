// app/api/github-wiki/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get('owner');
  const repo = searchParams.get('repo');

  if (!owner || !repo) {
    return NextResponse.json({ error: 'Owner and repo are required' }, { status: 400 });
  }

  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/wiki`, {
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const wikiPages = response.data;

    // Filter only markdown files or any other logic as required
    const markdownFiles = wikiPages.filter(file => file.name.endsWith('.md'));

    return NextResponse.json(markdownFiles, { status: 200 });
  } catch (error) {
    console.error('Error fetching GitHub wiki pages:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: 'Failed to fetch wiki pages' }, { status: 500 });
  }
}
