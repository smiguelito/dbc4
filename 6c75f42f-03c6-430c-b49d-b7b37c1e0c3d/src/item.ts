export type Props = {
  publicKey: string
  text?: string
  fontSize?: number
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(new GLTFShape('6c75f42f-03c6-430c-b49d-b7b37c1e0c3d/models/QR_Banner.glb'))
    sign.addComponent(new Transform({}))

    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${props.publicKey}`.toString()

    let QRTexture = new Texture(url)
    let QRMaterial = new Material()

    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = QRTexture

    let QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(0, 1.85, 0.015),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1.2, 1.2, 1.2),
      })
    )

    let signText = new Entity()
    signText.setParent(host)
    let text = new TextShape(props.text)
    text.fontSize = props.fontSize
    text.font = new Font(Fonts.SanFrancisco_Semibold)
    text.color = Color3.FromHexString('#525151ff')
    text.outlineColor = Color3.FromHexString('#525151ff')
    text.outlineWidth = 0.2

    text.width = 20
    text.height = 10
    text.hTextAlign = 'center'

    signText.addComponent(text)

    signText.addComponent(
      new Transform({
        position: new Vector3(0, 0.65, 0.015),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: new Vector3(0.15, 0.15, 0.15),
      })
    )

    channel.handleAction<ChangeTextType>('changeText', (action) => {
      text.value = action.values.newText
    })

    channel.request<string>('getText', (signText) => (text.value = signText))
    channel.reply<string>('getText', () => text.value)
  }
}
