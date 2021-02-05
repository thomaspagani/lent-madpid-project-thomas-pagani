// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000101010101010101010101010000000001010100000000000000000000010100010101000001010101010101010100000000010000010000000000000000000000000100000100000101000000010001010101000001010101010000000100000000000000000000000100010101000000000000000001010001000001010001010101010000010100010000010000000000000101000000000100000100000000000000010100000000000001000001010100000001000000000101010000000001010101010101010101000000000000000000000000000000000001010101010101010101010101010100010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030101010101010101010101010303030301010103050303030303030303010103010101030301010101010101010105030306010305010303030303030303030303060103050103030101030303010301010101030501010101010305050103020303030303030303030103010301030203030303030301010501030501010301010101010303010105010303010503030303030101030303030103030105030303030303010103030303030301030301010103050501050503030101010303040401010101010101010101030305050305030303030303030303030301010101010101010101010101010105010101`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. 2 2 2 . . . . . . . . . . 2 2 
. 2 2 2 . . 2 2 2 2 2 2 2 2 2 . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . 2 2 . . . 2 . 
2 2 2 2 . . 2 2 2 2 2 . . . 2 . 
. . . . . . . . . . 2 . 2 2 2 . 
. . . . . . . 2 2 . 2 . . 2 2 . 
2 2 2 2 2 . . 2 2 . 2 . . 2 . . 
. . . . 2 2 . . . . 2 . . 2 . . 
. . . . . 2 2 . . . . . . 2 . . 
2 2 2 . . . 2 . . . . 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.builtin.coral2,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
