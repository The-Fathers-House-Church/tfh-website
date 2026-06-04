// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import AnnouncementSection from '@/components/homepage/AnnouncementSection';
import DevotionalSection from '@/components/homepage/DevotionalSection';
import DirectionSection from '@/components/homepage/DirectionSection';
import DownloadAppSection from '@/components/homepage/DownloadAppSection';
import EventSection from '@/components/homepage/EventSection';
import HeroSection from '@/components/homepage/HeroSection';
import LinkSection from '@/components/homepage/LinkSection';
import SubscribeSection from '@/components/homepage/SubscribeSection';
import WelcomeSection from '@/components/homepage/WelcomeSection';
import WorshipExperienceSection from '@/components/homepage/WorshipExperienceSection';
import WorshipSection from '@/components/homepage/WorshipSection';
import AppLayout from '@/components/layout/AppLayout';
import { YOUTUBE_API_KEY, YOUTUBE_UPLOAD_KEY } from '@/functions/environmentVariables';
import { sendCatchFeedback } from '@/functions/feedback';
import { useAppDispatch } from '@/store/hooks';
import { setVideoLoading, setVideos } from '@/store/slices/youtubeVideos';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useAppDispatch();
  const getYoutubeChannelVideos = async () => {
    dispatch(setVideoLoading(true));
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10`
      );
      dispatch(
        setVideos({
          videos: response.data.items,
          nextPageToken: response.data.nextPageToken,
          prevPageToken: response.data.prevPageToken,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setVideoLoading(false));
    }
  };

  useEffect(() => {
    getYoutubeChannelVideos();
  }, []);

  return (
    <AppLayout>
      <HeroSection />
      <WelcomeSection />
      <LinkSection />
      <DevotionalSection />
      <WorshipSection />
      <WorshipExperienceSection />
      <DownloadAppSection />
      <EventSection />
      <AnnouncementSection />
    </AppLayout>
  );
}
