import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script2 from "../f7573b6c-f5d3-403c-ad74-2657adbe4a54/src/item"
import Script3 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script4 from "../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item"
import Script5 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script6 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script7 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script8 from "../8cfbe9ef-1b3e-4f3a-ad5e-f6bd8d421f42/src/item"
import Script9 from "../6c75f42f-03c6-430c-b49d-b7b37c1e0c3d/src/item"
import Script10 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(31.892459869384766, 0, 3.1859593391418457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.0197863578796387, 0.354933500289917, 1.3574000597000122)
})
verticalPlatform.addComponentOrReplace(transform2)

const verticalPlatform2 = new Entity('verticalPlatform2')
engine.addEntity(verticalPlatform2)
verticalPlatform2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(36.185420989990234, 41.04539489746094, 3.1565656661987305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8965035080909729, 0.4182139039039612, 1.321563959121704)
})
verticalPlatform2.addComponentOrReplace(transform3)

const dragonlairmodeskyscraperl = new Entity('dragonlairmodeskyscraperl')
engine.addEntity(dragonlairmodeskyscraperl)
dragonlairmodeskyscraperl.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
dragonlairmodeskyscraperl.addComponentOrReplace(transform4)
const gltfShape = new GLTFShape("models/dragonlairmodeskyscraperl.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
dragonlairmodeskyscraperl.addComponentOrReplace(gltfShape)

const verticalHallwayDoo = new Entity('verticalHallwayDoo')
engine.addEntity(verticalHallwayDoo)
verticalHallwayDoo.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(3.268155574798584, 0, 44.68321990966797),
  rotation: new Quaternion(2.220446049250313e-16, 0.3826834261417389, -4.5619412247788205e-8, -0.9238795638084412),
  scale: new Vector3(0.42699772119522095, 0.6913050413131714, 0.9999999403953552)
})
verticalHallwayDoo.addComponentOrReplace(transform5)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(3.6196937561035156, 0, 44.52349853515625),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(3.482339382171631, 2.866762638092041, 4.005830764770508)
})
triggerArea.addComponentOrReplace(transform6)

const crash = new Entity('crash')
engine.addEntity(crash)
crash.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(22.56134796142578, 0, 28.27918815612793),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.011718736961483955, 0.013861825689673424, 0.011718741618096828)
})
crash.addComponentOrReplace(transform7)
const gltfShape2 = new GLTFShape("models/crash.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
crash.addComponentOrReplace(gltfShape2)

const wingzero = new Entity('wingzero')
engine.addEntity(wingzero)
wingzero.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(17.5, 17.5, 40),
  rotation: new Quaternion(0.03941219300031662, -0.19402764737606049, 0.01815628632903099, 0.9800359606742859),
  scale: new Vector3(0.49999991059303284, 0.5000000596046448, 0.4999999701976776)
})
wingzero.addComponentOrReplace(transform8)
const gltfShape3 = new GLTFShape("models/wingzero.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wingzero.addComponentOrReplace(gltfShape3)

const billboard = new Entity('billboard')
engine.addEntity(billboard)
billboard.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(5.5, 16.5, 39),
  rotation: new Quaternion(2.220446049250313e-16, 0.19509035348892212, -2.3256578884911505e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
billboard.addComponentOrReplace(transform9)
const gltfShape4 = new GLTFShape("models/billboard.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
billboard.addComponentOrReplace(gltfShape4)

const door = new Entity('door')
engine.addEntity(door)
door.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(23.087156295776367, 0, 1.070850133895874),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9554532766342163, 0.8538398742675781, 1)
})
door.addComponentOrReplace(transform10)
const gltfShape5 = new GLTFShape("models/door.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
door.addComponentOrReplace(gltfShape5)

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)
squareSignpost.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(23.5, 0, 47.5),
  rotation: new Quaternion(5.969301641932335e-16, 1, -1.1920926823449918e-7, -2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
squareSignpost.addComponentOrReplace(transform11)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(29.813968658447266, 49.88127899169922, 23.819475173950195),
  rotation: new Quaternion(-9.631698040589269e-15, 0.7071067690849304, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.375, 3.375, 1)
})
nft.addComponentOrReplace(transform12)
const nftShape = new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/34840")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(20.951366424560547, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3.176950216293335, 3.5447659492492676)
})
clickArea.addComponentOrReplace(transform13)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(22, 1.8170397281646729, 27.714820861816406),
  rotation: new Quaternion(1.5394203364713045e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.5, 0.5, 1)
})
messageBubble.addComponentOrReplace(transform14)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(45, 0, 45),
  rotation: new Quaternion(-1.1153518091207813e-15, 0.38268354535102844, -4.561942645864292e-8, 0.9238795042037964),
  scale: new Vector3(1, 1, 1)
})
teleport.addComponentOrReplace(transform15)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(29.866771697998047, 49.909141540527344, 27.5),
  rotation: new Quaternion(-4.6820957416596025e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.375, 3.375, 1)
})
nft2.addComponentOrReplace(transform16)
const nftShape2 = new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/36242")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft3 = new Entity('nft3')
engine.addEntity(nft3)
nft3.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(29.77797508239746, 49.83885192871094, 31.43665313720703),
  rotation: new Quaternion(-3.0661034149982724e-15, -0.7071067094802856, 8.429368136830817e-8, 0.70710688829422),
  scale: new Vector3(3.3750007152557373, 3.375, 1.0000001192092896)
})
nft3.addComponentOrReplace(transform17)
const nftShape3 = new NFTShape("ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/34829")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft3.addComponentOrReplace(nftShape3)

const nft4 = new Entity('nft4')
engine.addEntity(nft4)
nft4.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(29.84370231628418, 50, 18.46004295349121),
  rotation: new Quaternion(-1.7627712779592387e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(6.75, 6.75, 1)
})
nft4.addComponentOrReplace(transform18)
const nftShape4 = new NFTShape("ethereum://0xba0d69d83b4b914f1107de4067ee34e863b80bde/17")
nftShape4.withCollisions = true
nftShape4.isPointerBlocker = true
nftShape4.visible = true
nftShape4.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft4.addComponentOrReplace(nftShape4)

const nft5 = new Entity('nft5')
engine.addEntity(nft5)
nft5.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(29.77842140197754, 49.86051559448242, 12.897723197937012),
  rotation: new Quaternion(-1.5394204423504229e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.3750200271606445, 3.375, 1.000004768371582)
})
nft5.addComponentOrReplace(transform19)
const nftShape5 = new NFTShape("ethereum://0xfaafdc07907ff5120a76b34b731b278c38d6043c/7463162001623907535520401410205323541600457617614130388856383298774704849855")
nftShape5.withCollisions = true
nftShape5.isPointerBlocker = true
nftShape5.visible = true
nftShape5.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft5.addComponentOrReplace(nftShape5)

const nft6 = new Entity('nft6')
engine.addEntity(nft6)
nft6.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(29.777795791625977, 49.85938262939453, 35.14609146118164),
  rotation: new Quaternion(-8.701843905818338e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(3.375, 3.375, 1)
})
nft6.addComponentOrReplace(transform20)
const nftShape6 = new NFTShape("ethereum://0xd193a22224795c43d837a3f3d7394b4d0cc15f60/1")
nftShape6.withCollisions = true
nftShape6.isPointerBlocker = true
nftShape6.visible = true
nftShape6.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft6.addComponentOrReplace(nftShape6)

const nft7 = new Entity('nft7')
engine.addEntity(nft7)
nft7.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(29.745277404785156, 49.901737213134766, 8.355874061584473),
  rotation: new Quaternion(-1.9771356233932785e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.375014305114746, 3.375, 1.0000038146972656)
})
nft7.addComponentOrReplace(transform21)
const nftShape7 = new NFTShape("ethereum://0x4d3814d4da8083b41861dec2f45b4840e8b72d68/181898")
nftShape7.withCollisions = true
nftShape7.isPointerBlocker = true
nftShape7.visible = true
nftShape7.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft7.addComponentOrReplace(nftShape7)

const nft8 = new Entity('nft8')
engine.addEntity(nft8)
nft8.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(29.82691764831543, 49.84796905517578, 38.898685455322266),
  rotation: new Quaternion(8.292074565166888e-16, -0.7071065902709961, 8.429367426288081e-8, 0.7071070075035095),
  scale: new Vector3(3.375, 3.375, 1)
})
nft8.addComponentOrReplace(transform22)
const nftShape8 = new NFTShape("ethereum://0xe74aedf09367d3272f0fd726f2f9ef693488eefe/10")
nftShape8.withCollisions = true
nftShape8.isPointerBlocker = true
nftShape8.visible = true
nftShape8.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft8.addComponentOrReplace(nftShape8)

const nft9 = new Entity('nft9')
engine.addEntity(nft9)
nft9.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(29.794200897216797, 49.8958854675293, 4.3979597091674805),
  rotation: new Quaternion(7.875076221827097e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(3.796900510787964, 4.21875, 1.0000057220458984)
})
nft9.addComponentOrReplace(transform23)
const nftShape9 = new NFTShape("ethereum://0xef6e83c6cd4f9c6bc07ce0dabebda1ce926db84a/1")
nftShape9.withCollisions = true
nftShape9.isPointerBlocker = true
nftShape9.visible = true
nftShape9.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft9.addComponentOrReplace(nftShape9)

const nft10 = new Entity('nft10')
engine.addEntity(nft10)
nft10.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(29.769500732421875, 2, 25.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.250006914138794, 2.25, 1.0000030994415283)
})
nft10.addComponentOrReplace(transform24)
const nftShape10 = new NFTShape("ethereum://0x22c1f6050e56d2876009903609a2cc3fef83b415/12895")
nftShape10.withCollisions = true
nftShape10.isPointerBlocker = true
nftShape10.visible = true
nftShape10.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft10.addComponentOrReplace(nftShape10)

const nft11 = new Entity('nft11')
engine.addEntity(nft11)
nft11.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(29.767786026000977, 2, 23.5),
  rotation: new Quaternion(4.503509538521992e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067094802856),
  scale: new Vector3(2.2499897480010986, 2.25, 0.9999984502792358)
})
nft11.addComponentOrReplace(transform25)
const nftShape11 = new NFTShape("ethereum://0x22c1f6050e56d2876009903609a2cc3fef83b415/13234")
nftShape11.withCollisions = true
nftShape11.isPointerBlocker = true
nftShape11.visible = true
nftShape11.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft11.addComponentOrReplace(nftShape11)

const nft12 = new Entity('nft12')
engine.addEntity(nft12)
nft12.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(29.771385192871094, 2, 27.5),
  rotation: new Quaternion(-1.514112791952359e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.249999761581421, 2.25, 0.9999999403953552)
})
nft12.addComponentOrReplace(transform26)
const nftShape12 = new NFTShape("ethereum://0x22c1f6050e56d2876009903609a2cc3fef83b415/12893")
nftShape12.withCollisions = true
nftShape12.isPointerBlocker = true
nftShape12.visible = true
nftShape12.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft12.addComponentOrReplace(nftShape12)

const nft13 = new Entity('nft13')
engine.addEntity(nft13)
nft13.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(29.807159423828125, 2, 21.499996185302734),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.2500054836273193, 2.25, 1.000002384185791)
})
nft13.addComponentOrReplace(transform27)
const nftShape13 = new NFTShape("ethereum://0x22c1f6050e56d2876009903609a2cc3fef83b415/14145")
nftShape13.withCollisions = true
nftShape13.isPointerBlocker = true
nftShape13.visible = true
nftShape13.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft13.addComponentOrReplace(nftShape13)

const nft14 = new Entity('nft14')
engine.addEntity(nft14)
nft14.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(29.8223876953125, 2, 19.5),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.2500059604644775, 2.25, 1.0000026226043701)
})
nft14.addComponentOrReplace(transform28)
const nftShape14 = new NFTShape("ethereum://0x22c1f6050e56d2876009903609a2cc3fef83b415/27387")
nftShape14.withCollisions = true
nftShape14.isPointerBlocker = true
nftShape14.visible = true
nftShape14.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft14.addComponentOrReplace(nftShape14)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape6 = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
entity.addComponentOrReplace(gltfShape6)
const transform29 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform29)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape6)
const transform30 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform30)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape6)
const transform31 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform31)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape6)
const transform32 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform32)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape6)
const transform33 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform33)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape6)
const transform34 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform34)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape6)
const transform35 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform35)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape6)
const transform36 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform36)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape6)
const transform37 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform37)

const qrScifiFrame = new Entity('qrScifiFrame')
engine.addEntity(qrScifiFrame)
qrScifiFrame.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(16, 1, 14.574403762817383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
qrScifiFrame.addComponentOrReplace(transform38)

const door2 = new Entity('door2')
engine.addEntity(door2)
door2.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(12.455804824829102, 0, 1.22808039188385),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.083398699760437, 1, 1.0000009536743164)
})
door2.addComponentOrReplace(transform39)
door2.addComponentOrReplace(gltfShape5)

const door3 = new Entity('door3')
engine.addEntity(door3)
door3.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(20.395151138305664, 0, 14.447893142700195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
door3.addComponentOrReplace(transform40)
door3.addComponentOrReplace(gltfShape5)

const qrDonationsBanner = new Entity('qrDonationsBanner')
engine.addEntity(qrDonationsBanner)
qrDonationsBanner.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(31.000003814697266, 0, 45.5),
  rotation: new Quaternion(-2.941476281095195e-15, 0.8819212913513184, -1.0513319637084351e-7, 0.4713967442512512),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
qrDonationsBanner.addComponentOrReplace(transform41)

const squareWoodTable = new Entity('squareWoodTable')
engine.addEntity(squareWoodTable)
squareWoodTable.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(18.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable.addComponentOrReplace(transform42)
const gltfShape7 = new GLTFShape("models/Table_03/Table_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
squareWoodTable.addComponentOrReplace(gltfShape7)

const squareWoodTable2 = new Entity('squareWoodTable2')
engine.addEntity(squareWoodTable2)
squareWoodTable2.setParent(_scene)
squareWoodTable2.addComponentOrReplace(gltfShape7)
const transform43 = new Transform({
  position: new Vector3(15, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable2.addComponentOrReplace(transform43)

const squareWoodTable3 = new Entity('squareWoodTable3')
engine.addEntity(squareWoodTable3)
squareWoodTable3.setParent(_scene)
squareWoodTable3.addComponentOrReplace(gltfShape7)
const transform44 = new Transform({
  position: new Vector3(11.5, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable3.addComponentOrReplace(transform44)

const squareWoodTable4 = new Entity('squareWoodTable4')
engine.addEntity(squareWoodTable4)
squareWoodTable4.setParent(_scene)
squareWoodTable4.addComponentOrReplace(gltfShape7)
const transform45 = new Transform({
  position: new Vector3(8, 0, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable4.addComponentOrReplace(transform45)

const squareWoodTable5 = new Entity('squareWoodTable5')
engine.addEntity(squareWoodTable5)
squareWoodTable5.setParent(_scene)
squareWoodTable5.addComponentOrReplace(gltfShape7)
const transform46 = new Transform({
  position: new Vector3(3, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable5.addComponentOrReplace(transform46)

const squareWoodTable6 = new Entity('squareWoodTable6')
engine.addEntity(squareWoodTable6)
squareWoodTable6.setParent(_scene)
squareWoodTable6.addComponentOrReplace(gltfShape7)
const transform47 = new Transform({
  position: new Vector3(3, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable6.addComponentOrReplace(transform47)

const squareWoodTable7 = new Entity('squareWoodTable7')
engine.addEntity(squareWoodTable7)
squareWoodTable7.setParent(_scene)
squareWoodTable7.addComponentOrReplace(gltfShape7)
const transform48 = new Transform({
  position: new Vector3(3, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable7.addComponentOrReplace(transform48)

const squareWoodTable8 = new Entity('squareWoodTable8')
engine.addEntity(squareWoodTable8)
squareWoodTable8.setParent(_scene)
squareWoodTable8.addComponentOrReplace(gltfShape7)
const transform49 = new Transform({
  position: new Vector3(3, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable8.addComponentOrReplace(transform49)

const rusticSquareStool = new Entity('rusticSquareStool')
engine.addEntity(rusticSquareStool)
rusticSquareStool.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(3.0866777896881104, 0, 38.0152702331543),
  rotation: new Quaternion(-2.774194367913404e-17, 0.14742621779441833, -1.7574572908074515e-8, 0.9890730977058411),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool.addComponentOrReplace(transform50)
const gltfShape8 = new GLTFShape("models/Chairwood_02/Chairwood_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
rusticSquareStool.addComponentOrReplace(gltfShape8)

const rusticSquareStool2 = new Entity('rusticSquareStool2')
engine.addEntity(rusticSquareStool2)
rusticSquareStool2.setParent(_scene)
rusticSquareStool2.addComponentOrReplace(gltfShape8)
const transform51 = new Transform({
  position: new Vector3(2.746614694595337, 0, 36),
  rotation: new Quaternion(1.9083331355561716e-17, -0.1196376159787178, 1.4261913428015305e-8, 0.9928176403045654),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool2.addComponentOrReplace(transform51)

const rusticSquareStool3 = new Entity('rusticSquareStool3')
engine.addEntity(rusticSquareStool3)
rusticSquareStool3.setParent(_scene)
rusticSquareStool3.addComponentOrReplace(gltfShape8)
const transform52 = new Transform({
  position: new Vector3(3, 0, 34.5),
  rotation: new Quaternion(4.3366813041276846e-18, -0.05865341052412987, 6.992030066044208e-9, 0.9982784390449524),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
rusticSquareStool3.addComponentOrReplace(transform52)

const rusticSquareStool4 = new Entity('rusticSquareStool4')
engine.addEntity(rusticSquareStool4)
rusticSquareStool4.setParent(_scene)
rusticSquareStool4.addComponentOrReplace(gltfShape8)
const transform53 = new Transform({
  position: new Vector3(3.0742781162261963, 0, 32.34878921508789),
  rotation: new Quaternion(3.4691051195654767e-18, -0.07319583743810654, 8.725622890892737e-9, 0.9973176121711731),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool4.addComponentOrReplace(transform53)

const rusticSquareStool5 = new Entity('rusticSquareStool5')
engine.addEntity(rusticSquareStool5)
rusticSquareStool5.setParent(_scene)
rusticSquareStool5.addComponentOrReplace(gltfShape8)
const transform54 = new Transform({
  position: new Vector3(3.059882164001465, 0, 31.11290740966797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool5.addComponentOrReplace(transform54)

const rusticSquareStool6 = new Entity('rusticSquareStool6')
engine.addEntity(rusticSquareStool6)
rusticSquareStool6.setParent(_scene)
rusticSquareStool6.addComponentOrReplace(gltfShape8)
const transform55 = new Transform({
  position: new Vector3(3, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool6.addComponentOrReplace(transform55)

const rusticSquareStool7 = new Entity('rusticSquareStool7')
engine.addEntity(rusticSquareStool7)
rusticSquareStool7.setParent(_scene)
rusticSquareStool7.addComponentOrReplace(gltfShape8)
const transform56 = new Transform({
  position: new Vector3(3.2026538848876953, 0, 39.5853385925293),
  rotation: new Quaternion(4.7702306514044904e-18, 0.040306687355041504, -4.804931119650746e-9, 0.9991873502731323),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
rusticSquareStool7.addComponentOrReplace(transform56)

const rusticSquareStool9 = new Entity('rusticSquareStool9')
engine.addEntity(rusticSquareStool9)
rusticSquareStool9.setParent(_scene)
rusticSquareStool9.addComponentOrReplace(gltfShape8)
const transform57 = new Transform({
  position: new Vector3(3.000000238418579, 0, 41.535194396972656),
  rotation: new Quaternion(-2.0814545931380073e-17, -0.12652352452278137, 1.5082779469821617e-8, 0.9919636249542236),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool9.addComponentOrReplace(transform57)

const rusticSquareStool8 = new Entity('rusticSquareStool8')
engine.addEntity(rusticSquareStool8)
rusticSquareStool8.setParent(_scene)
rusticSquareStool8.addComponentOrReplace(gltfShape8)
const transform58 = new Transform({
  position: new Vector3(7, 0, 45),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
rusticSquareStool8.addComponentOrReplace(transform58)

const rusticSquareStool10 = new Entity('rusticSquareStool10')
engine.addEntity(rusticSquareStool10)
rusticSquareStool10.setParent(_scene)
rusticSquareStool10.addComponentOrReplace(gltfShape8)
const transform59 = new Transform({
  position: new Vector3(8.888018608093262, 0, 45.135276794433594),
  rotation: new Quaternion(0, -0.0980171412229538, 1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
rusticSquareStool10.addComponentOrReplace(transform59)

const rusticSquareStool11 = new Entity('rusticSquareStool11')
engine.addEntity(rusticSquareStool11)
rusticSquareStool11.setParent(_scene)
rusticSquareStool11.addComponentOrReplace(gltfShape8)
const transform60 = new Transform({
  position: new Vector3(10.560176849365234, 0, 45.08935546875),
  rotation: new Quaternion(0, 0.0980171412229538, -1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
rusticSquareStool11.addComponentOrReplace(transform60)

const rusticSquareStool12 = new Entity('rusticSquareStool12')
engine.addEntity(rusticSquareStool12)
rusticSquareStool12.setParent(_scene)
rusticSquareStool12.addComponentOrReplace(gltfShape8)
const transform61 = new Transform({
  position: new Vector3(12.385432243347168, 0, 45),
  rotation: new Quaternion(-1.981499325379296e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool12.addComponentOrReplace(transform61)

const rusticSquareStool13 = new Entity('rusticSquareStool13')
engine.addEntity(rusticSquareStool13)
rusticSquareStool13.setParent(_scene)
rusticSquareStool13.addComponentOrReplace(gltfShape8)
const transform62 = new Transform({
  position: new Vector3(14.164066314697266, 0, 45),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool13.addComponentOrReplace(transform62)

const rusticSquareStool14 = new Entity('rusticSquareStool14')
engine.addEntity(rusticSquareStool14)
rusticSquareStool14.setParent(_scene)
rusticSquareStool14.addComponentOrReplace(gltfShape8)
const transform63 = new Transform({
  position: new Vector3(16.075782775878906, 0, 45),
  rotation: new Quaternion(0, -0.0980171412229538, 1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
rusticSquareStool14.addComponentOrReplace(transform63)

const rusticSquareStool15 = new Entity('rusticSquareStool15')
engine.addEntity(rusticSquareStool15)
rusticSquareStool15.setParent(_scene)
rusticSquareStool15.addComponentOrReplace(gltfShape8)
const transform64 = new Transform({
  position: new Vector3(17.604835510253906, 0, 45),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool15.addComponentOrReplace(transform64)

const rusticSquareStool16 = new Entity('rusticSquareStool16')
engine.addEntity(rusticSquareStool16)
rusticSquareStool16.setParent(_scene)
rusticSquareStool16.addComponentOrReplace(gltfShape8)
const transform65 = new Transform({
  position: new Vector3(19.55449104309082, 0, 45),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool16.addComponentOrReplace(transform65)

const urbanTrashCan = new Entity('urbanTrashCan')
engine.addEntity(urbanTrashCan)
urbanTrashCan.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(20, 0, 0.5000009536743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
urbanTrashCan.addComponentOrReplace(transform66)
const gltfShape9 = new GLTFShape("models/TrashCan_01/TrashCan_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
urbanTrashCan.addComponentOrReplace(gltfShape9)

const squareWoodTable9 = new Entity('squareWoodTable9')
engine.addEntity(squareWoodTable9)
squareWoodTable9.setParent(_scene)
squareWoodTable9.addComponentOrReplace(gltfShape7)
const transform67 = new Transform({
  position: new Vector3(19.6555118560791, 3.527928590774536, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable9.addComponentOrReplace(transform67)

const squareWoodTable10 = new Entity('squareWoodTable10')
engine.addEntity(squareWoodTable10)
squareWoodTable10.setParent(_scene)
squareWoodTable10.addComponentOrReplace(gltfShape7)
const transform68 = new Transform({
  position: new Vector3(16.798784255981445, 3.527928590774536, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable10.addComponentOrReplace(transform68)

const squareWoodTable11 = new Entity('squareWoodTable11')
engine.addEntity(squareWoodTable11)
squareWoodTable11.setParent(_scene)
squareWoodTable11.addComponentOrReplace(gltfShape7)
const transform69 = new Transform({
  position: new Vector3(11.201623916625977, 3.527928590774536, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable11.addComponentOrReplace(transform69)

const squareWoodTable12 = new Entity('squareWoodTable12')
engine.addEntity(squareWoodTable12)
squareWoodTable12.setParent(_scene)
squareWoodTable12.addComponentOrReplace(gltfShape7)
const transform70 = new Transform({
  position: new Vector3(8.576817512512207, 3.527928590774536, 45),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable12.addComponentOrReplace(transform70)

const squareWoodTable13 = new Entity('squareWoodTable13')
engine.addEntity(squareWoodTable13)
squareWoodTable13.setParent(_scene)
squareWoodTable13.addComponentOrReplace(gltfShape7)
const transform71 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 39.4193229675293),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable13.addComponentOrReplace(transform71)

const squareWoodTable14 = new Entity('squareWoodTable14')
engine.addEntity(squareWoodTable14)
squareWoodTable14.setParent(_scene)
squareWoodTable14.addComponentOrReplace(gltfShape7)
const transform72 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 36.796966552734375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable14.addComponentOrReplace(transform72)

const squareWoodTable15 = new Entity('squareWoodTable15')
engine.addEntity(squareWoodTable15)
squareWoodTable15.setParent(_scene)
squareWoodTable15.addComponentOrReplace(gltfShape7)
const transform73 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 31.171401977539062),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable15.addComponentOrReplace(transform73)

const squareWoodTable16 = new Entity('squareWoodTable16')
engine.addEntity(squareWoodTable16)
squareWoodTable16.setParent(_scene)
squareWoodTable16.addComponentOrReplace(gltfShape7)
const transform74 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 28.273269653320312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable16.addComponentOrReplace(transform74)

const squareWoodTable17 = new Entity('squareWoodTable17')
engine.addEntity(squareWoodTable17)
squareWoodTable17.setParent(_scene)
squareWoodTable17.addComponentOrReplace(gltfShape7)
const transform75 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 22.525014877319336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable17.addComponentOrReplace(transform75)

const squareWoodTable18 = new Entity('squareWoodTable18')
engine.addEntity(squareWoodTable18)
squareWoodTable18.setParent(_scene)
squareWoodTable18.addComponentOrReplace(gltfShape7)
const transform76 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 19.680131912231445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable18.addComponentOrReplace(transform76)

const squareWoodTable19 = new Entity('squareWoodTable19')
engine.addEntity(squareWoodTable19)
squareWoodTable19.setParent(_scene)
squareWoodTable19.addComponentOrReplace(gltfShape7)
const transform77 = new Transform({
  position: new Vector3(2.8143389225006104, 3.527928590774536, 11.020840644836426),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable19.addComponentOrReplace(transform77)

const rusticSquareStool17 = new Entity('rusticSquareStool17')
engine.addEntity(rusticSquareStool17)
rusticSquareStool17.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 20.64117431640625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool17.addComponentOrReplace(transform78)
rusticSquareStool17.addComponentOrReplace(gltfShape8)

const rusticSquareStool18 = new Entity('rusticSquareStool18')
engine.addEntity(rusticSquareStool18)
rusticSquareStool18.setParent(_scene)
rusticSquareStool18.addComponentOrReplace(gltfShape8)
const transform79 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 18.778125762939453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool18.addComponentOrReplace(transform79)

const rusticSquareStool19 = new Entity('rusticSquareStool19')
engine.addEntity(rusticSquareStool19)
rusticSquareStool19.setParent(_scene)
rusticSquareStool19.addComponentOrReplace(gltfShape8)
const transform80 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 21.59079933166504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool19.addComponentOrReplace(transform80)

const rusticSquareStool20 = new Entity('rusticSquareStool20')
engine.addEntity(rusticSquareStool20)
rusticSquareStool20.setParent(_scene)
rusticSquareStool20.addComponentOrReplace(gltfShape8)
const transform81 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 23.454933166503906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool20.addComponentOrReplace(transform81)

const rusticSquareStool21 = new Entity('rusticSquareStool21')
engine.addEntity(rusticSquareStool21)
rusticSquareStool21.setParent(_scene)
rusticSquareStool21.addComponentOrReplace(gltfShape8)
const transform82 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 27.37017822265625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool21.addComponentOrReplace(transform82)

const rusticSquareStool22 = new Entity('rusticSquareStool22')
engine.addEntity(rusticSquareStool22)
rusticSquareStool22.setParent(_scene)
rusticSquareStool22.addComponentOrReplace(gltfShape8)
const transform83 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 29.15288543701172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool22.addComponentOrReplace(transform83)

const rusticSquareStool23 = new Entity('rusticSquareStool23')
engine.addEntity(rusticSquareStool23)
rusticSquareStool23.setParent(_scene)
rusticSquareStool23.addComponentOrReplace(gltfShape8)
const transform84 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 30.36980628967285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool23.addComponentOrReplace(transform84)

const rusticSquareStool24 = new Entity('rusticSquareStool24')
engine.addEntity(rusticSquareStool24)
rusticSquareStool24.setParent(_scene)
rusticSquareStool24.addComponentOrReplace(gltfShape8)
const transform85 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 32.0162239074707),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool24.addComponentOrReplace(transform85)

const rusticSquareStool25 = new Entity('rusticSquareStool25')
engine.addEntity(rusticSquareStool25)
rusticSquareStool25.setParent(_scene)
rusticSquareStool25.addComponentOrReplace(gltfShape8)
const transform86 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 35.90897750854492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool25.addComponentOrReplace(transform86)

const rusticSquareStool26 = new Entity('rusticSquareStool26')
engine.addEntity(rusticSquareStool26)
rusticSquareStool26.setParent(_scene)
rusticSquareStool26.addComponentOrReplace(gltfShape8)
const transform87 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 37.67097854614258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool26.addComponentOrReplace(transform87)

const rusticSquareStool27 = new Entity('rusticSquareStool27')
engine.addEntity(rusticSquareStool27)
rusticSquareStool27.setParent(_scene)
rusticSquareStool27.addComponentOrReplace(gltfShape8)
const transform88 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 38.467308044433594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool27.addComponentOrReplace(transform88)

const rusticSquareStool28 = new Entity('rusticSquareStool28')
engine.addEntity(rusticSquareStool28)
rusticSquareStool28.setParent(_scene)
rusticSquareStool28.addComponentOrReplace(gltfShape8)
const transform89 = new Transform({
  position: new Vector3(2.864168167114258, 3.523435115814209, 40.41226577758789),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool28.addComponentOrReplace(transform89)

const rusticSquareStool29 = new Entity('rusticSquareStool29')
engine.addEntity(rusticSquareStool29)
rusticSquareStool29.setParent(_scene)
rusticSquareStool29.addComponentOrReplace(gltfShape8)
const transform90 = new Transform({
  position: new Vector3(7.864169120788574, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool29.addComponentOrReplace(transform90)

const rusticSquareStool30 = new Entity('rusticSquareStool30')
engine.addEntity(rusticSquareStool30)
rusticSquareStool30.setParent(_scene)
rusticSquareStool30.addComponentOrReplace(gltfShape8)
const transform91 = new Transform({
  position: new Vector3(9.364169120788574, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool30.addComponentOrReplace(transform91)

const rusticSquareStool31 = new Entity('rusticSquareStool31')
engine.addEntity(rusticSquareStool31)
rusticSquareStool31.setParent(_scene)
rusticSquareStool31.addComponentOrReplace(gltfShape8)
const transform92 = new Transform({
  position: new Vector3(10.364169120788574, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool31.addComponentOrReplace(transform92)

const rusticSquareStool32 = new Entity('rusticSquareStool32')
engine.addEntity(rusticSquareStool32)
rusticSquareStool32.setParent(_scene)
rusticSquareStool32.addComponentOrReplace(gltfShape8)
const transform93 = new Transform({
  position: new Vector3(12.364169120788574, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool32.addComponentOrReplace(transform93)

const rusticSquareStool33 = new Entity('rusticSquareStool33')
engine.addEntity(rusticSquareStool33)
rusticSquareStool33.setParent(_scene)
rusticSquareStool33.addComponentOrReplace(gltfShape8)
const transform94 = new Transform({
  position: new Vector3(15.864169120788574, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool33.addComponentOrReplace(transform94)

const rusticSquareStool34 = new Entity('rusticSquareStool34')
engine.addEntity(rusticSquareStool34)
rusticSquareStool34.setParent(_scene)
rusticSquareStool34.addComponentOrReplace(gltfShape8)
const transform95 = new Transform({
  position: new Vector3(17.86417007446289, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool34.addComponentOrReplace(transform95)

const rusticSquareStool35 = new Entity('rusticSquareStool35')
engine.addEntity(rusticSquareStool35)
rusticSquareStool35.setParent(_scene)
rusticSquareStool35.addComponentOrReplace(gltfShape8)
const transform96 = new Transform({
  position: new Vector3(18.86417007446289, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool35.addComponentOrReplace(transform96)

const rusticSquareStool36 = new Entity('rusticSquareStool36')
engine.addEntity(rusticSquareStool36)
rusticSquareStool36.setParent(_scene)
rusticSquareStool36.addComponentOrReplace(gltfShape8)
const transform97 = new Transform({
  position: new Vector3(20.66095733642578, 3.523435115814209, 45.1469841003418),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool36.addComponentOrReplace(transform97)

const untitled = new Entity('untitled')
engine.addEntity(untitled)
untitled.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(38.000003814697266, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.5, 0.4999999701976776)
})
untitled.addComponentOrReplace(transform98)
const gltfShape10 = new GLTFShape("models/untitled.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
untitled.addComponentOrReplace(gltfShape10)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(17.5, 1.5, 14.5),
  rotation: new Quaternion(-7.838858787068397e-15, -2.9802322387695312e-8, 1.4125882063999347e-14, 1),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
radio.addComponentOrReplace(transform99)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script1.spawn(verticalPlatform, {"distance":115,"speed":2,"autoStart":true,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform, channelBus))
script1.spawn(verticalPlatform2, {"distance":16,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalPlatform2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform2, channelBus))
script2.spawn(verticalHallwayDoo, {}, createChannel(channelId, verticalHallwayDoo, channelBus))
script3.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"verticalHallwayDoo","actionId":"open","values":{}}],"onLeave":[{"entityName":"verticalHallwayDoo","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script4.spawn(squareSignpost, {"text":"post no bills","fontSize":20}, createChannel(channelId, squareSignpost, channelBus))
script5.spawn(clickArea, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"messageBubble","actionId":"open","values":{}}]}, createChannel(channelId, clickArea, channelBus))
script6.spawn(messageBubble, {"text":"welcom to my bar","fontSize":15}, createChannel(channelId, messageBubble, channelBus))
script7.spawn(teleport, {"x":"148","y":"-33","name":"coming soon"}, createChannel(channelId, teleport, channelBus))
script8.spawn(qrScifiFrame, {"publicKey":"0x103B3a31c6732C8615161757c64d2C5Ed7DaAD38","text":"please sir could you spare a coin?","fontSize":12}, createChannel(channelId, qrScifiFrame, channelBus))
script9.spawn(qrDonationsBanner, {"publicKey":"0x103B3a31c6732C8615161757c64d2C5Ed7DaAD38","text":"thanks!","fontSize":10}, createChannel(channelId, qrDonationsBanner, channelBus))
script10.spawn(radio, {"startOn":false,"volume":0.54,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"station":"https://freeuk13.listen2myradio.com/live.mp3?typeportmount=s2_20223_stream_944192845"}, createChannel(channelId, radio, channelBus))