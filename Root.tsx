import { Composition } from 'remotion';
import { AnimatedHeroSection } from './src/components/animations/AnimatedHeroSection';
import { AnimatedTrustSignals } from './src/components/animations/AnimatedTrustSignals';
import { AnimatedHowItWorks } from './src/components/animations/AnimatedHowItWorks';
import { AnimatedCallToAction } from './src/components/animations/AnimatedCallToAction';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Hero"
				component={AnimatedHeroSection}
				durationInFrames={300} // 10 seconds at 30fps
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="TrustSignals"
				component={AnimatedTrustSignals}
				durationInFrames={360} // 12 seconds at 30fps
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="HowItWorks"
				component={AnimatedHowItWorks}
				durationInFrames={330} // 11 seconds at 30fps
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="CallToAction"
				component={AnimatedCallToAction}
				durationInFrames={360} // 12 seconds at 30fps
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};