export interface IExploreWorlds {
    id: WorldID;
    imgUrl: string;
    title: string;
};

export interface IMotion {
    direction: sting | number;
    type: string;
    delay: number | undefined;
    duration: number | undefined;
}

export type WorldID = string;

export type SetActiveWorldID = (id: WorldID) => void;


