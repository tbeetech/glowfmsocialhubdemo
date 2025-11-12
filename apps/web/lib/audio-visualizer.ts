/**
 * Audio-Reactive Utilities
 * Real-time frequency analysis and animation mapping
 */

type FrequencyArray = Uint8Array<ArrayBuffer>;

export class AudioVisualizer {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: FrequencyArray | null = null;
  private source: MediaElementAudioSourceNode | null = null;
  private animationFrame: number | null = null;
  
  constructor(private audioElement?: HTMLAudioElement) {}
  
  async init(audioElement?: HTMLAudioElement) {
    if (audioElement) {
      this.audioElement = audioElement;
    }
    
    if (!this.audioElement) {
      throw new Error('Audio element required');
    }
    
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(new ArrayBuffer(bufferLength)) as FrequencyArray;
      
      this.source = this.audioContext.createMediaElementSource(this.audioElement);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      
      return true;
    } catch (error) {
      console.error('Audio visualization init failed:', error);
      return false;
    }
  }
  
  getFrequencyData(): FrequencyArray | null {
    if (!this.analyser || !this.dataArray) return null;
    
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.dataArray;
  }
  
  getAverageFrequency(): number {
    const data = this.getFrequencyData();
    if (!data) return 0;
    
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
  
  getBassIntensity(): number {
    const data = this.getFrequencyData();
    if (!data) return 0;
    
    // First 1/4 of frequency data (bass range)
    const bassRange = data.slice(0, Math.floor(data.length / 4));
    const sum = bassRange.reduce((acc, val) => acc + val, 0);
    return (sum / bassRange.length) / 255; // Normalize 0-1
  }
  
  getMidIntensity(): number {
    const data = this.getFrequencyData();
    if (!data) return 0;
    
    // Middle 1/2 of frequency data
    const start = Math.floor(data.length / 4);
    const end = Math.floor((3 * data.length) / 4);
    const midRange = data.slice(start, end);
    const sum = midRange.reduce((acc, val) => acc + val, 0);
    return (sum / midRange.length) / 255;
  }
  
  getTrebleIntensity(): number {
    const data = this.getFrequencyData();
    if (!data) return 0;
    
    // Last 1/4 of frequency data (treble range)
    const start = Math.floor((3 * data.length) / 4);
    const trebleRange = data.slice(start);
    const sum = trebleRange.reduce((acc, val) => acc + val, 0);
    return (sum / trebleRange.length) / 255;
  }
  
  getBeatDetection(): boolean {
    const bass = this.getBassIntensity();
    return bass > 0.7; // Threshold for beat detection
  }
  
  startVisualization(callback: (data: FrequencyData) => void) {
    const update = () => {
      const data: FrequencyData = {
        raw: this.getFrequencyData(),
        average: this.getAverageFrequency(),
        bass: this.getBassIntensity(),
        mid: this.getMidIntensity(),
        treble: this.getTrebleIntensity(),
        beat: this.getBeatDetection(),
      };
      
      callback(data);
      this.animationFrame = requestAnimationFrame(update);
    };
    
    update();
  }
  
  stopVisualization() {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
  
  cleanup() {
    this.stopVisualization();
    
    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
    
    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}

export interface FrequencyData {
  raw: FrequencyArray | null;
  average: number;
  bass: number;
  mid: number;
  treble: number;
  beat: boolean;
}

/**
 * Map frequency data to animation parameters
 */
export const mapFrequencyToAnimation = {
  glowIntensity: (bass: number) => 0.6 + (bass * 0.6), // 0.6 - 1.2
  objectScale: (mid: number) => 1 + (mid * 0.2), // 1.0 - 1.2
  particleShimmer: (treble: number) => treble * 2, // 0 - 2
  borderGlow: (average: number) => `0 0 ${20 + (average * 40)}px rgba(255, 102, 0, ${0.4 + (average * 0.4)})`,
};

export function mapFrequencyToGlowIntensity(data: FrequencyData | null) {
  if (!data) {
    return {
      bassGlow: 0.6,
      midScale: 1,
      trebleShimmer: 0
    };
  }

  return {
    bassGlow: mapFrequencyToAnimation.glowIntensity(data.bass),
    midScale: mapFrequencyToAnimation.objectScale(data.mid),
    trebleShimmer: mapFrequencyToAnimation.particleShimmer(data.treble)
  };
}

/**
 * Generate audio-reactive CSS variables
 */
export const generateAudioCSS = (data: FrequencyData) => {
  return {
    '--audio-bass': data.bass.toFixed(2),
    '--audio-mid': data.mid.toFixed(2),
    '--audio-treble': data.treble.toFixed(2),
    '--audio-average': (data.average / 255).toFixed(2),
    '--glow-intensity': mapFrequencyToAnimation.glowIntensity(data.bass).toFixed(2),
    '--scale': mapFrequencyToAnimation.objectScale(data.mid).toFixed(2),
  } as React.CSSProperties;
};
