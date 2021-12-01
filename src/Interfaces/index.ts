export interface singleSong {
  id: number;
  title: string;
  duration: number;
  artist: artist
  album: album
}

export interface songs {
    data: singleSong 
}
export interface album {
    id: number;
    title: string;
    cover_medium: string;
}
export interface artist {
    id: number;
    name: string;
    picture_medium: string;
}

export interface trackInfo {
    id: number;
    title: string;
    picture_medium: string;
    artist: artist
    album: album
}
