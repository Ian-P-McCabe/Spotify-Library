/**
 * Created by mohitbhansali on 10/06/18.
 */

export default class MusicProvider {

    static sharedProvider() {
        if (!MusicProvider.instance) {
            MusicProvider.instance = new MusicProvider();
        }
        return MusicProvider.instance;
    }

    configure() {
        window.MusicKit.configure({
            developerToken: '',
            app: {
                name: 'Ian Apple Music',
                build: '1978.4.1'
            }
        });
    }

    getMusicInstance() {
        return window.MusicKit.getInstance();
    }
}