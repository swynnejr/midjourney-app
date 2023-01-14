export interface IExploreWorlds {
    id: WorldID;
    imgUrl: string;
    title: string;
};

export type WorldID = string;

export type SetActiveWorldID = (id: WorldID) => void;


